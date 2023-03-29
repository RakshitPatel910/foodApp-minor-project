import mongoose, { mongo } from "mongoose";

const ongoingOrderSchema = new mongoose.Schema({
    customerEmailId: String,
    tokenN0: Number,
    orderTime: Date,
    orderDetails: [{
        foodName: String,
        quantity: Number,
        category: Number,
        foodPrice: Number
    }],
    preparedStatus: Boolean,
    claimed: Boolean,
    paymentStatus: Boolean,
    transactionId: Number,
    bankName: String,
    order_id: String

})

const ongoingOrderModel = mongoose.model("todayorder", ongoingOrderSchema)

export default ongoingOrderModel