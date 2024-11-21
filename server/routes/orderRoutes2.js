const express = require("express")
const router = express.Router()

const{
    auth,

}= require("../middleware/auth")



const {
    capturePayment,
    paymentVerification,
    getAllOrder,
    adminAllOrders
} = require("../controllers/OrderCtrl2")


router.post("/capturePayment", auth,  capturePayment)
router.post("/verifyPayment", auth,  paymentVerification)
router.get("/get", auth,  getAllOrder)

// Admin
router.get("/getAll", adminAllOrders)


module.exports = router
