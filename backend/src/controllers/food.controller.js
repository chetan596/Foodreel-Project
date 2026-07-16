const foodModel = require("../models/food.model");
const storageServices = require("../services/storage.service");
const { v4: uuidv4 } = require('uuid');


const createFood = async (req, res) => {

    const fileUploadResult = await storageServices.uploadFile(req.file.buffer, uuidv4())

    const foodItem = await foodModel.create({
        name : req.body.name,
        description : req.body.description,
        video : fileUploadResult.url,
        foodPartnerId : req.foodPartner._id
    })
    
    res.status(201).json({
        message : "food created successfully",
        food: foodItem
    })
}



const getFoodItem = async (req, res,)=>{
    const foodItem = await foodModel.find({});

    res.status(200).json({
        message : "Food item fetched successfully"
    })
}



module.exports = {
    createFood,
    getFoodItem
}