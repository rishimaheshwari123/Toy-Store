const mongoose = require("mongoose");

const authSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
            trim: true,
        },

        email: {
            type: String,
            required: true,
            trim: true,
        },
        location: {
            type: String,
            // required: true,
        },
        password: {
            type: String,
            required: true,
        },

        role: {
            type: String,
            enum: ["User", "Admin"],
            default: "User",
            required: true,
        },

        subscriptions: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'Subscriptions'
            }
        ],

        token: {
            type: String,
        },

        // Address Field
        address: {
            address: {
                type: String,
                required: false, // You can set this as required or optional depending on your needs
            },
            pincode: {
                type: String,
                required: false, // Optional, set to required if needed
            },
            city: {
                type: String,
                required: false,
            },
            phone: {
                type: String,
                required: false,
            },
            state: {
                type: String,
                required: false,
            }
        }

    },
    { timestamps: true }
);

module.exports = mongoose.model("auth", authSchema);
