const express = require("express");
const router = express.Router();
const { Signup } = require("../controller/Signup");
const { Signin } = require("../controller/Signin.js");
const { authenticationToken } = require("../controller/userAuth");
const { Profile } = require("../controller/Profile.js");
router.post("/signup", Signup);
router.post("/signin", Signin);
router.get("/getuserinfo", authenticationToken, Profile);//check authentication and authorization for protected route

module.exports = router;