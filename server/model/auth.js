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
            enum: ["User", "Admin",],
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

    },
    { timestamps: true }
);

module.exports = mongoose.model("auth", authSchema);
