const foodPartnerModel = require("../models/foodpartner.model")
// const userModel = require("../models/user.model")
const jwt = require("jsonwebtoken");
const userModel = require("../models/user.model");

const authFoodPartnerMiddleware = async (req, res, next) => {
    const token = req.cookies.token;

    if(!token){
        return res.status(401).json({
            message: "Unauthorized"
        })
    }

    try{
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        const foodPartner = await foodPartnerModel.findById(decoded.id);

        if(!foodPartner){
            return res.status(401).json({
                message: "Unauthorized"
            })
        }

        req.foodPartner = foodPartner;
        next();
    } catch (error) {
        return res.status(401).json({
            message: "invalid token"
        })
    }
}

const authUserMiddleware = async (req,res,next)=>{
    const token = req.cookies.token;

    if(!token){
        return res.status(401).json({
            message : "Unauthorized"
        })
    }


    try{
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        const user = await userModel.findById(decoded.id);

        if(!user){
            return res.status(401).json({
                message: "Unauthorized"
            })
        }

        req.userId = user
        next()
    }catch (error) {
        return res.status(401).json({
            message: "invalid token"
        })
    }
}



module.exports ={
    authFoodPartnerMiddleware,
    authUserMiddleware
}