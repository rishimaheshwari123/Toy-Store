const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
    productId: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Product',
        required: true,
    }],
    // quantity: { type: Number, required: true },
    // size: { type: String, required: true },
    contact: { type: String, required: true },
    quantity: { type: String, required: true },
    totalAmount: { type: Number, required: true },
    address: { type: String, required: true },
    paymentDetails: {
        razorpay_payment_id: { type: String, required: true },
        razorpay_order_id: { type: String, required: true },
        razorpay_signature: { type: String, required: true },
    },
    status: { type: String, default: "Pending" },
    userId: { type: mongoose.Schema.Types.ObjectId, ref: "auth", required: true }, // Reference to User
}, { timestamps: true });

const Order = mongoose.model("Order", orderSchema);

module.exports = Order;
