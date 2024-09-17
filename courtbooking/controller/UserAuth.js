const jwt = require("jsonwebtoken")
require("dotenv").config();


const authenticationToken = (req, res, next) => {
    const authHeader = req.headers["authorization"];
    const token = authHeader && authHeader.split(" ")[1];
    if (token == null) {
        return res.status(400).json({
            message: "authentication token required"
        })
    }
    jwt.verify(token, process.env.SECRETKEY, (err, user) => {
        if (err) {
            return res.status(403).json({
                message: "token expired or doesnt valid"
            });
        }
        req.user = user;
        next();
    })

}
module.exports = { authenticationToken };