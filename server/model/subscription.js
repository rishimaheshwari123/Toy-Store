const mongoose = require("mongoose");

const subscriptionsSchema = new mongoose.Schema(
    {
        isActive: {
            type: Boolean,
            default: false
        },
        type: {
            type: String,
            required: true,
            trim: true,
        },

        totalAmount: {
            type: String,
            required: true,
            trim: true,
        },
        userId: [{
            type: mongoose.Schema.Types.ObjectId,
            ref: 'auth'
        }],
        paymentDetails: {
            razorpay_payment_id: { type: String, required: true },
            razorpay_order_id: { type: String, required: true },
            razorpay_signature: { type: String, required: true },
        },
    },
    { timestamps: true }
);

module.exports = mongoose.model("Subscriptions", subscriptionsSchema);
