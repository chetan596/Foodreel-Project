const userModel = require("../models/user.model");
const foodPartnerModel = require("../models/foodpartner.model")
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");


const registerUser = async (req, res) => {

    const {fullName, email , password} = req.body;

    const isUserAlreadyExist = await userModel.findOne({email: email});

    if(isUserAlreadyExist){
        return res.status(400).json({
            message: "User already exists"
        })
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = await  userModel.create({
        fullName,
        email,
        password: hashedPassword
    })

    const token = jwt.sign({
        id : newUser._id,
        
    }, process.env.JWT_SECRET)

    res.cookie("token",token)

    res.status(201).json({
        message: "User registered successfully",
        user : {
            id: newUser._id,
            fullName : newUser.fullName,
            email: newUser.email

        }
    })
}

const loginUser = async (req, res) => {
    const {email, password} = req.body;

    const user = await userModel.findOne({email: email});

    if(!user){
        return res.status(400).json({
            message: "Invalid email or password"

        })
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);

    if(!isPasswordValid){
        return res.status(400).json({
            message: "Invalid email or password"
        })
    }

    const token = jwt.sign({
        id : user._id,
    }, process.env.JWT_SECRET)

    res.cookie("token",token)

    res.status(200).json({
        message: "User logged in successfully",
        user : {
            id: user._id,
            fullName : user.fullName,
            email: user.email
        }
    })
}

const logoutUser = (req, res)=>{
    const token = req.cookies.token;
    res.clearCookie("token");
    res.status(200).json({
        message: "User logged out successfully"
    })
}


const registerFoodPartner = async (req, res) => {
    const {name, email, password } = req.body;

    const isFoodPartnerAlreadyExist = await foodPartnerModel.findOne({email: email});

    if(isFoodPartnerAlreadyExist){
        return res.status(400).json({
            message : "Food partner accont already exists!"
        })
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newFoodPartner = await foodPartnerModel.create({
        name,
        email,
        password: hashedPassword
    });


    const token = jwt.sign({
        id : newFoodPartner._id,
    }, process.env.JWT_SECRET)


    res.cookie("token",token)

    res.status(201).json({
        message: "Food partner registered successfully",
        foodPartner : {
            id: newFoodPartner._id,
            name : newFoodPartner.name,
            email: newFoodPartner.email
        }
    })

}


const loginFoodPartner = async (req, res) => {
    const {email, password} = req.body;

    const foodPartner = await foodPartnerModel.findOne({email: email});

    if (!foodPartner){
        return res.status(400).json({
            message: "Invalid email or password"
        })
    }

    const isPasswordValid = await bcrypt.compare(password, foodPartner.password);

    if(!isPasswordValid){
        return res.status(400).json({
            message: "Invalid email or password"
        })
    }

    const token = jwt.sign({
        id : foodPartner._id,
    }, process.env.JWT_SECRET)

    res.cookie("token",token)

    res.status(200).json({
        message: "Food partner logged in successfully",
        foodPartner : {
            id: foodPartner._id,
            name : foodPartner.name,
            email: foodPartner.email
        }
    })
}

const logoutFoodPartner = (req, res)=>{
    const token = req.cookies.token;
    res.clearCookie("token");
    res.status(200).json({
        message: "Food partner logged out successfully"
    })
}

module.exports = {
    registerUser,
    loginUser,
    logoutUser,
    registerFoodPartner,
    loginFoodPartner,
    logoutFoodPartner
}
