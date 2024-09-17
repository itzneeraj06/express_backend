const User = require("../modal/users");
const bcrypt = require("bcrypt")

exports.Signup = async (req, res) => {
    try {
        const { username, firstname, lastname, email, password, address } = req.body;
        const alreadyUser = await User.findOne({ username: username });
        if (alreadyUser) {
            return res.status(400).json(
                {
                    message: "already exists Username"
                }
            )
        }
        const alreadyEmail = await User.findOne({ email: email });
        if (alreadyEmail) {
            return res.status(400).json(
                {
                    message: "already exists Email"
                }
            )
        }
        if (password.length <= 4) {
            return res.status(400).json({ message: "password is too short" })
        }

        const hashPassword = await bcrypt.hash(password, 10)

        // create user
        const newUser = await User.create({
            username: username,
            firstname: firstname,
            lastname: lastname,
            email: email,
            password: hashPassword,
            address: address

        })
        return res.status(200).json({
            message: "signup successfull",
            data: newUser
        })

    } catch (error) {
        console.log(error);
    }

}