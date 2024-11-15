const Order = require("../model/orderModel")
const crypto = require("crypto");
const { razorpayInstance } = require("../config/ragorpay");

const createOrderCtrl = async (req, res) => {
    try {
        const { totalAmount } = req.body;

        const options = {
            amount: totalAmount * 100,
            currency: "INR",
            receipt: `order_rcptid_${Math.floor(Math.random() * 100000)}`,
        };

        const order = await razorpayInstance.orders.create(options);
        res.status(200).json({ orderId: order.id });
    } catch (error) {
        console.log(error)
        return res.status(500).json({
            success: false,
            message: "Error in creating order"
        })
    }

}


const verifyPaymentCtrl = async (req, res) => {
    try {
        const { razorpay_payment_id, razorpay_order_id, razorpay_signature, orderDetails } = req.body;
        const { productId, contact, totalAmount, address, quantity } = orderDetails;

        const userId = req.user.id
        if (!productId || !contact || !totalAmount || !address || !quantity) {
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


module.exports = { createOrderCtrl, verifyPaymentCtrl, getUserOrdersCtrl }
