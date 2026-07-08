const express = require('express');
const router = express.Router();


const { registerUser,loginUser, logoutUser } = require("../controllers/auth.controller");
const { registerFoodPartner , loginFoodPartner , logoutFoodPartner} = require("../controllers/auth.controller");

router.post("/user/register", registerUser);
router.post("/user/login", loginUser);
router.get("/user/logout",  logoutUser);

// FoodPartner routes
router.post("/foodpartner/register", registerFoodPartner);
router.post("/foodpartner/login", loginFoodPartner);
router.get("/foodpartner/logout",  logoutFoodPartner);

module.exports = router;