const Order = require("../model/orderModel")
const crypto = require("crypto");
const { razorpayInstance } = require("../config/ragorpay");
const mongoose = require("mongoose");

const createRazorpayOrderCtrl = async (req, res) => {
    try {
        const { amount } = req.body;
        console.log("Received payment request:", req.body);

        const options = {
            amount: amount * 100, // Convert to paise
            currency: "INR",
            receipt: `order_rcptid_${Math.floor(Math.random() * 100000)}`,
        };

        const order = await razorpayInstance.orders.create(options);
        console.log("Created Razorpay order:", order);

        // Return the entire order object
        res.status(200).json({ order });
    } catch (error) {
        console.error("Error creating Razorpay order:", error);
        return res.status(500).json({
            success: false,
            message: "Error in creating order"
        });
    }
};


const verifyPaymentCtrl = async (req, res) => {
    try {
        const { razorpay_payment_id, razorpay_order_id, razorpay_signature, orderDetails } = req.body;
        const { productId, contact, totalAmount, address, quantity, productName } = orderDetails;

        const userId = req.user.id
        if (!productId || !contact || !totalAmount || !address || !quantity || !productName) {
            return res.status(400).json({ message: "Missing order details." });
        }

        const secret = process.env.RAZORPAY_SECRET;
        const hmac = crypto.createHmac("sha256", secret);
        hmac.update(razorpay_order_id + "|" + razorpay_payment_id);
        const generated_signature = hmac.digest("hex");

        if (generated_signature === razorpay_signature) {
            const newOrder = new Order({
                productId,
                contact,
                totalAmount,
                address,
                quantity,
                productName,
                paymentDetails: {
                    razorpay_payment_id,
                    razorpay_order_id,
                    razorpay_signature,
                },
                status: "Paid",
                userId
            });

            await newOrder.save();
            return res.status(200).json({ message: "Payment verified and order placed successfully." });
        } else {
            return res.status(400).json({ message: "Payment verification failed." });
        }
    } catch (error) {
        console.error("Error in verifyPaymentCtrl:", error.message);
        return res.status(500).json({ message: "Internal server error." });
    }
};



const getUserOrdersCtrl = async (req, res) => {
    try {
        const orders = await Order.find();
        return res.status(200).json({
            success: true,
            orders,
        });
    } catch (error) {
        console.error("Error in getUserOrdersCtrl:", error.message);
        return res.status(500).json({ message: "Internal server error." });
    }
};

const getSingleUserOrdersCtrl = async (req, res) => {
    try {
        const { userId } = req.params;

        // Validate userId
        if (!userId || !mongoose.Types.ObjectId.isValid(userId)) {
            return res.status(400).json({ success: false, message: "Invalid user ID." });
        }

        // Fetch all orders for the user
        const order = await Order.find({ userId }).populate("userId");

        // Check if orders exist
        if (!order || order.length === 0) {
            return res.status(404).json({ success: false, message: "No orders found for this user." });
        }

        return res.status(200).json({
            success: true,
            order,
            total: order.length
        });
    } catch (error) {
        console.error("Error in getSingleUserOrdersCtrl:", error);
        return res.status(500).json({ success: false, message: "Internal server error." });
    }
};




module.exports = { createOrderCtrl, verifyPaymentCtrl, getUserOrdersCtrl, getSingleUserOrdersCtrl }
