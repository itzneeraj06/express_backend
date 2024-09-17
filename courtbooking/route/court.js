const express = require("express");
const router = express.Router();
const { createcourt, updatecourt, getcourtdetails } = require("../controller/Court");
const { authenticationToken } = require("../controller/userAuth");
router.post("/createcourt", authenticationToken, createcourt);
router.put("/updatecourt", authenticationToken, updatecourt);
router.get("/getcourtdetails", getcourtdetails);
module.exports = router;