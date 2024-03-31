// configure express
const express = require('express');
const app = express();


require("dotenv").config();
const PORT =process.env.PORT || 3000;

//fetch data from body 
app.use(express.json());

//db connect 
const dbConnect = require("./config/database.js");
dbConnect();

//middleware
const user=require("./routes/user.js");
app.use("/api/v1",user)

//start server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

//default route
app.get("/", (req, res) => {
    res.send(`<h1>Server started successfully</h1>`);
});