const express = require("express");
const { createOrderCtrl, verifyPaymentCtrl, getUserOrdersCtrl } = require("../controllers/orderCtrl");
const { auth } = require("../middleware/auth");
const router = express.Router();

router.post("/create", auth, createOrderCtrl);
router.post("/payment-success", auth, verifyPaymentCtrl);
router.get("/getAll", auth, getUserOrdersCtrl);



module.exports = router;
