const mongoose = require('mongoose');
require("dotenv").config();

const config = () => {
    mongoose.connect(process.env.URL)
        .then(() => console.log("DB CONNECTION SUCCESS"))
        .catch((err) => {
            console.log(`DB CONNECTION ISSUES`);
            console.error(err.message);
            process.exit(1);
        })

}
module.exports=config;