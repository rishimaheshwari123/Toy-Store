import axios from "axios";
import { toast } from "react-toastify";
import { subscription } from "../apis"

const { CREATE_PAYMENT, VERIFY_PAYMENT } = subscription

export const createOrder = async (totalAmount, token) => {
    try {
        const orderDetails = {
            totalAmount, // Pass total amount for backend
        };

        const { data } = await axios.post(CREATE_PAYMENT, orderDetails, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });
        return data.orderId;
    } catch (error) {
        toast.error("Failed to create the order. Please try again.");
        throw new Error(error);
    }
};




export const initiatePayment = async (type, totalAmount, orderId, token) => {
    try {
        const options = {
            key: "rzp_test_lQz64anllWjB83",
            amount: totalAmount * 100, // Amount in paise
            currency: "INR",
            name: type, // Use the type for Razorpay modal
            description: `${type} Subscription`, // Description for Razorpay modal
            order_id: orderId,
            handler: async function (response) {
                const { razorpay_payment_id, razorpay_order_id, razorpay_signature } = response;

                if (!razorpay_signature) {
                    toast.error("Payment verification failed. Please try again.");
                    return;
                }

                try {
                    // Backend payment verification
                    await axios.post(
                        VERIFY_PAYMENT,
                        {
                            razorpay_payment_id,
                            razorpay_order_id,
                            razorpay_signature,
                            orderDetails: { type, totalAmount }, // Pass type and amount to backend
                        },
                        {
                            headers: {
                                Authorization: `Bearer ${token}`,
                            },
                        }
                    );
                    toast.success("Payment successful! Subscription activated.");
                } catch (error) {
                    console.error("Verification error:", error);
                    toast.error("Payment verification failed. Please contact support.");
                }
            },
            prefill: {
                name: "John Doe", // Customize based on your user data
                email: "johndoe@example.com",
                contact: "9999999999",
            },
            theme: {
                color: "#3399cc",
            },
        };

        const rzp = new window.Razorpay(options);
        rzp.open();
    } catch (error) {
        console.error("Payment initiation error:", error);
        toast.error("Failed to initiate payment. Please try again.");
    }
};




