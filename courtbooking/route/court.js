const express = require("express");
const router = express.Router();
const { createcourt, updatecourt, getcourtdetails, getcourt } = require("../controller/Court");
const { authenticationToken } = require("../controller/userAuth");

router.post("/createcourt", authenticationToken, createcourt);
router.put("/updatecourt/:courtid", authenticationToken, updatecourt);
router.get("/getcourt/:courtid", authenticationToken, getcourt);
router.get("/getcourtdetails", getcourtdetails);

module.exports = router;