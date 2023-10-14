// import
const uuid = require('uuid')
const Order = require("../model/order")
// usage
const uniqueRandomID = uuid.v4()
exports.PlaceOrder = async (req, res) => {

    try {
            console.log(req.body);
        // taking productName , productId  , OrderId , price , OrderStatus as array
        const { productName, productId, OrderId, price, orderStatus } = req.body;
        const uniqueRandomID = uuid.v4();
        console.log('ji')
        console.log(price);
        const order = await Order.create({
            OrderId: uniqueRandomID,
            productName,
            productId,
            price,
            orderStatus,

        });

        res.status(201).json({
            success: true,
            order,
        });

    } catch (err) {
        res.status(201).json({
            success: false,
            message: err.message,
        });
    }

}


exports.GetOrder = async (req, res) => {
    try {

        console.log(req.params.id)

        //fetch data
        const order = await Order.findById(req.params.id);
        console.log(order,"order")

        if (!order) {
            return next(new ErrorHander("Order not found with this Id", 404));
        }

        res.status(201).json({
            success: true,
            order,
        });

    } catch (err) {
        res.status(201).json({
            success: false,
            message: err.message,
        });

    }
}


exports.OrderStatus = async (req, res) => {
    try {


        const order = await Order.findById(req.params.id);
        console.log(order,"order")

        if (!order) {
            return next(new ErrorHander("Order not found with this Id", 404));
        }
        const {status, place , time , toBeDeliveredTime}=req.body;
        const  orderStatus={
            status,
            place,
            time,
            toBeDeliveredTime
        }
        console.log(orderStatus,"orderStatus");
        

        //update orderstatus at the 0 index
        order.orderStatus.unshift(orderStatus);
        await order.save();
        res.status(201).json({
            success: true,
            order,
        });

    } catch (err) {
        res.status(201).json({
            success: false,
            message: err.message,
        });

    }
}