const express = require("express");
const multer = require("multer")
const router = express.Router();
const {createFood} = require("../controllers/food.controller")
const { authFoodPartnerMiddleware} = require("../middleware/auth.middleware")


const upload = multer({
    storage: multer.memoryStorage()
})

router.post("/",authFoodPartnerMiddleware,upload.single("video"), createFood);


module.exports = router;