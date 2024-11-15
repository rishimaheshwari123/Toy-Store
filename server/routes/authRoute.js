const express = require("express");
const { loginCtrl, registerCtrl, getSingleUser } = require("../controllers/authCtrl");
const router = express.Router();



router.post("/register", registerCtrl);
router.post("/login", loginCtrl);
router.get("/get/:id", getSingleUser);
module.exports = router;