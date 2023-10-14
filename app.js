const express = require("express");
const app = express();
const cookieParser = require("cookie-parser");
const path = require("path");
const cors = require('cors'); 
const {PlaceOrder,GetOrder,OrderStatus} = require("./routes/orderRoute")




app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cors());
app.use(cookieParser());




app.post("/newOrder",PlaceOrder);
app.get("/order/:id",GetOrder);
app.put("/order/status/:id",OrderStatus);






module.exports = app;
