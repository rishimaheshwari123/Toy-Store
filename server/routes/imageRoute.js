const express = require("express")
const { imageUpload, uploadImages } = require("../controllers/imageCtrl")
const router = express.Router()



router.post("/upload", imageUpload)
router.post("/multi", uploadImages)
// export all router
module.exports = router


