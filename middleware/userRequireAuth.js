const jwt = require("jsonwebtoken");
const UserModel = require("../models/userModel");
require("dotenv").config();

const userRequireAuth = async (req, res, next) => {
  const { authorization } = req.headers;

  if (!authorization) {
    return res.status(401).json({ error: "Authorization token required" });
  }

  const token = authorization.split(" ")[1];

  try {
    const { _id } = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);

    req.user = await UserModel.findOne({ _id }).select("_id");
    next();
  } catch (error) {
    console.log(error.message);
    res.status(401).json({ error: "Request is not authorized" });
  }
};

module.exports = userRequireAuth;
