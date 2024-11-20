const express = require("express");
const { auth } = require("../middleware/auth");
const { createSubscriptionCtrl, verifyPaymentCtrl, getAllSubctrl } = require("../controllers/subscriptionCtrl")
const router = express.Router();

router.post("/create", auth, createSubscriptionCtrl);
router.post("/payment-success", auth, verifyPaymentCtrl);
router.get("/getAll", auth, getAllSubctrl);


module.exports = router;
