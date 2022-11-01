const UserModel = require("../models/userModel");
require("dotenv").config();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

// create token
const createToken = (_id) => {
    return jwt.sign({ _id }, `${process.env.ACCESS_TOKEN_SECRET}`, { expiresIn: "3d" });
};

// signup controller
const signupUser = async (req, res) => {
    const { email, password, name } = req.body;
    try {
        const user = await UserModel.signup(email, password, name);

        const token = createToken(user._id);

        res.status(200).json({ email, token });
    } catch (error) {

        res.status(400).json({ error: error.message });
    }
};

// login controller
const loginUser = async (req, res) => {
    const { email, password } = req.body;

    try {
        const user = await UserModel.login(email, password);

        const token = createToken(user._id);

        res.status(200).json({ email, token });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};



//User Profile
// const userProfile = async (req, res) => {
//     try {
//         const { id } = req.params;
//         const user = await UserModel.findById({ _id: id }).select("password").select("name");
//         res.status(200).json({ user, message: "User Profile" });
//     } catch (error) {
//         res.status(400).json({ error: error.message });
//     }
// };

const userProfile = async (req, res) => {

    try {
        const user_id = req.user;
        const user = await UserModel.findById(user_id).select("-password");
        res.status(200).json({ user});
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};


// update user info
const updateUser = async (req, res) => {
    const user_id = req.user;
    const { email, name, profile_image } = req.body;
    try {
        const user = await UserModel.findOneAndUpdate(
            user_id,
            {
                email,
                name,
                profile_image
            },
            {
                returnOriginal: false,
            }
        ).select("-password");
        res.status(200).json(user);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

module.exports = {
    signupUser,
    loginUser,
    updateUser,
    userProfile
}