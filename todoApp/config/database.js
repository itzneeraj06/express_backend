const mongoose = require("mongoose"); 
require("dotenv").config();
const  dbConnect = async() => {
    return await mongoose.connect(process.env.DATABASE_URL, { 
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
        .then(() => {
            console.log("Connection successful with DB");
        })
        .catch((e) => {
            console.log("connection nhi ho paaya ");
            console.log(e);
            process.exit(1);
        });
};

module.exports = dbConnect;
 