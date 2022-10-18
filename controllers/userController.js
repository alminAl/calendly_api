const UserModel = require("../models/userModel");

const jwt = require("jsonwebtoken");

const createToken = (_id) => {
    return jwt.sign({ _id }, `${process.env.ACCESS_TOKEN_SECRET}`, { expiresIn: "3d" });
};

const signupUser = async (req, res) => {
    const { email, password, name } = req.body;
    try {
        const user = await UserModel.signup(email, password, name);
        // create a token
        const token = createToken(user._id);

        res.status(200).json({ email, token });
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

//Update user
const updateUser = async (req, res) => {
    const { id } = req.params;
    try {
        const user = await UserModel.findOneAndUpdate(
            { _id: id },
            {
                $set: {
                    name: req.body?.name,
                    email: req.body?.email,
                    password: req.body?.password
                },
            },
            {
                new: true,
                upsert: true,
            }
        );
        res.status(200).json(user);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

//User Profile
const userProfile = async (req, res) => {
    try {
        const { id } = req.params;
        const user = await UserModel.findById({ _id: id }).select("password").select("name");
        res.status(200).json({ user, message: "User Profile" });
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