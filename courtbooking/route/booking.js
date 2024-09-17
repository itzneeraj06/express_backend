const express = require("express");
const router = express.Router();
const { booking, checkbooking, updatebooking } = require("../controller/Booking")
const { authenticationToken } = require("../controller/userAuth");
router.post("/booking", authenticationToken, booking);
router.get("/checkbooking", authenticationToken, checkbooking);
router.put("/updatebooking", authenticationToken, updatebooking);

module.exports = router;