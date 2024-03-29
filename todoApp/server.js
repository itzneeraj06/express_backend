// configure express
const express = require('express');
const app = express();


require("dotenv").config();
const PORT =3000;

//fetch data from body 
app.use(express.json());

//db connect 
const dbConnect = require("./config/database.js");
dbConnect();


//for better understanding 
const todoRoutes = require("./route/todos.js");
app.use("/api/v1", todoRoutes);


//start server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

//default route
app.get("/", (req, res) => {
    res.send(`<h1>Server started successfully</h1>`);
});