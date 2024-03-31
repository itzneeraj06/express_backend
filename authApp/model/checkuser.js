const mongoose = require("mongoose");
const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        trim: true
    },
    password: {
        type: String,
        required: true,
    },
    role: {
        type: String,
        enum:["admin","student","visitor"]//in teeno me se koi ki string hi accept krega bss
    }
})
module.exports=mongoose.model("user",userSchema);
