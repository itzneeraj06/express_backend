const mongoose = require('mongoose');
const court = new mongoose.Schema({
    courtname: {
        type: String,
        required: true,
        unique: true
    },
    location: {
        type: String,
        required: true,
    },
    sports: {
        type: String,
        required: true,
        enum: ["chess", "badminton"]//add more sports
    },
    price: {
        type: Number,
        required: true,
    },
    booking: [ //particular court ke saare match ki booking
        {
            type: mongoose.Types.ObjectId,
            ref: "booking"
        }
    ],
    matchhistory: [ //records of match who will win and in the book fetch the user also 
        {
            type: mongoose.Types.ObjectId,
            ref: "booking"
        }
    ],
    customers: [{
        type: mongoose.Types.ObjectId,
        ref: "user"
    }]


}, { timestamps: true });
module.exports = mongoose.model("court", court);