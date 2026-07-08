const foodModel = require("../models/food.model");


const createFood = async (req, res) => {
    console.log(req.foodPartner);
    console.log(req.body);
    console.log(req.file);
    
    res.send("Hello world")
}


module.exports = {
    createFood
}