// configure mongoose first install mongoose
const mongoose = require("mongoose"); 

//configure dotenv package => npm i dotenv
//direct access of .env file var 
require("dotenv").config();

//db connection call a connect method and pass url of Db
const  dbConnect = async() => {
    return await mongoose.connect(process.env.MONGODB_URL, { 
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
