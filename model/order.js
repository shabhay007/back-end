const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
OrderId:{
    type:String,
    require:true,
},
 productName:{
     type:String,
     require:true,
 },
  
 productId:{
    type:String,
    require:true,
},
price:{
    type:String,
    require:true,
},
 orderStatus: [
    {
        status: {
            type:String ,
            default: "Processing",
        },
		place:String,
		time: {
            type:String ,
            default: Date.now,
        },
		toBeDeliveredTime: {
            type:String ,
            default: Date.now,
        }
    },
 ],
  deliveredAt: Date,
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Order", orderSchema);