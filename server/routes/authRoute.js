const express = require("express");
const { loginCtrl, registerCtrl, getSingleUser } = require("../controllers/authCtrl");
const {auth} = require("../middleware/auth");
const router = express.Router();
const authModel = require('../model/auth')


router.post("/register", registerCtrl);
router.post("/login", loginCtrl);
router.get("/get/:id", getSingleUser);



router.put("/add-address", auth, async (req, res) => {
    try {
        const userId = req.user.id; // Assuming you are using JWT and user info is in req.user
        const { address, pincode, city, phone, state } = req.body;

        // Find the user and add the address
        const user = await authModel.findByIdAndUpdate(
            userId,
            {
                $set: {
                    "address.address": address,
                    "address.pincode": pincode,
                    "address.city": city,
                    "address.phone": phone,
                    "address.state": state
                }
            },
            { new: true } // To return the updated user document
        );

        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }

        res.status(200).json({ message: "Address added successfully", user });
    } catch (error) {
        res.status(500).json({ message: "Server error", error });
    }
});

// Edit Address Route
router.put("/edit-address", auth, async (req, res) => {
    try {
        const userId = req.user.id;
        const { address, pincode, city, phone, state } = req.body;

        // Find the user and update the address
        const user = await authModel.findByIdAndUpdate(
            userId,
            {
                $set: {
                    "address.address": address,
                    "address.pincode": pincode,
                    "address.city": city,
                    "address.phone": phone,
                    "address.state": state
                }
            },
            { new: true }
        );

        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }

        res.status(200).json({ message: "Address updated successfully", user });
    } catch (error) {
        res.status(500).json({ message: "Server error", error });
    }
});
module.exports = router;