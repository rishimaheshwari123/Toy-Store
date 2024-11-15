const express = require("express");
const { auth } = require("../middleware/auth");
const { createSubscriptionCtrl, verifyPaymentCtrl } = require("../controllers/subscriptionCtrl")
const router = express.Router();

router.post("/create", auth, createSubscriptionCtrl);
router.post("/payment-success", auth, verifyPaymentCtrl);


module.exports = router;
