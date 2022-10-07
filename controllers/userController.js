const UserModel = require("../models/userModel");

const jwt = require("jsonwebtoken");

const createToken = (_id) => {
    return jwt.sign({ _id }, `${process.env.ACCESS_TOKEN_SECRET}`, { expiresIn: "3d" });
};

const signupUser = async (req, res) => {
    const { email, password } = req.body;
    try {
        const user = await UserModel.signup(email, password);
        // create a token
        const token = createToken(user._id);

        res.status(200).json({ user, token });
    } catch (error) {
        // console.log(error)
        res.status(400).json({ error: error.message });
    }
};

const loginUser = async (req, res) => {
    const { email, password } = req.body;

    try {
        const user = await UserModel.login(email, password);

        // create a token
        const token = createToken(user._id);

        res.status(200).json({ email, token });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

module.exports = {
    signupUser,
    loginUser
}