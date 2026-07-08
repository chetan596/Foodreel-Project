require('dotenv').config();
const express = require('express') ;
const cookie = require("cookie-parser");
const authRoutes = require("./routes/auth.routes");
const foodRoutes = require("./routes/food.routes");
const app = express();

// millwaress

app.use(express.json());
app.use(cookie());


app.get("/",(req,res)=>{
    res.send("Hello World")
})

app.use("/api/auth",authRoutes);
app.use("/api/food",foodRoutes);


module.exports = app;