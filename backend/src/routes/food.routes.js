const express = require("express");
const multer = require("multer")
const router = express.Router();
const {createFood,getFoodItem} = require("../controllers/food.controller")
const { authFoodPartnerMiddleware, authUserMiddleware} = require("../middleware/auth.middleware")


const upload = multer({
    storage: multer.memoryStorage()
})

router.post("/",authFoodPartnerMiddleware,upload.single("video"), createFood);

router.get("/",authUserMiddleware,getFoodItem)




module.exports = router;