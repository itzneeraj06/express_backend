const mongoose = require('mongoose');
const booking = new mongoose.Schema({
    name: {
        type: mongoose.Types.ObjectId,
        ref: "user"
    },
    sports: {
        type: String,
        enum: ["chess", "badminton"]
    },
    court: {
        type: mongoose.Types.ObjectId,
        ref: "court"
    },
    date: {
        type: Date
    },
    price: {
        type: Number,
        required: true
    },
    paymentmode: {
        type: String,
        default: "postpaid",
        enum: ["prepaid", "postpaid"]
    },
    paid: {
        type: String,
        default: "unpaid",
        enum: ["paid", "unpaid"]
    }

}, { timestamps: true });
module.exports = mongoose.model("booking", booking);