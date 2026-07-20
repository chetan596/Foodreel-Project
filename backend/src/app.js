require('dotenv').config();
const express = require('express') ;
const cookie = require("cookie-parser");
const authRoutes = require("./routes/auth.routes");
const foodRoutes = require("./routes/food.routes");
const app = express();
const cors = require("cors")
const { authFoodPartnerMiddleware, authUserMiddleware} = require("./middleware/auth.middleware")


// millwaress

app.use(cors({
    origin : "http://localhost:5173",
    credentials: true
}))

app.use(express.json());
app.use(cookie());


app.get("/",authUserMiddleware,(req,res)=>{
    res.send("Hello World")
})

app.use("/api/auth",authRoutes);
app.use("/api/food",foodRoutes);


module.exports = app