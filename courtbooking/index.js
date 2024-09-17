const express = require('express');
const app = express();

const cors = require("cors");
app.use(cors());
app.use(express.json());

require("dotenv").config();
const port = process.env.PORT;

app.listen(port, () => {
    console.log(`server started successfully at ${port}`);
})

const config = require('./configureDB/config.js');
config();

app.get("/", (req, res) => {
    return res.status(200).json({
        message: "homepage"
    })
})

const user = require("./route/user.js");
app.use("/api/v1", user)
const court = require("./route/court.js")
app.use("/api/v1", court)
const booking = require("./route/booking.js")
app.use("/api/v1", booking)