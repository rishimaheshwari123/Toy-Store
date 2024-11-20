const express = require("express");
const { createOrderCtrl, verifyPaymentCtrl, getUserOrdersCtrl, getSingleUserOrdersCtrl } = require("../controllers/orderCtrl");
const { auth } = require("../middleware/auth");
const router = express.Router();

router.post("/create", auth, createOrderCtrl);
router.post("/payment-success", auth, verifyPaymentCtrl);
router.get("/getAll", auth, getUserOrdersCtrl);
router.get("/get/:userId", auth, getSingleUserOrdersCtrl);



module.exports = router;
