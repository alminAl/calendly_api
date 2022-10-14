const express = require("express");
const { signupUser, loginUser, updateUser } = require("../controllers/userController");
const userRequireAuth = require("../middleware/userRequireAuth");
const validation = require("../middleware/validationMiddleware");
const {
  userSignupValidation,
  userLoginValidation,
} = require("../validations/userValidation");

// const userRequireAuth = require('../middleware/userRequireAuth');

// express router
const router = express();

router.post("/signup", validation(userSignupValidation), signupUser);
router.post("/login", validation(userLoginValidation), loginUser);

// update user
router.patch("/user/updatedUser/:id", userRequireAuth, updateUser);

module.exports = router;
