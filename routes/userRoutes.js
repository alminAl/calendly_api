const express = require('express');
const { signupUser, loginUser } = require('../controllers/userController');
const validation = require('../middleware/validationMiddleware');
const userSignupValidation = require('../validations/userSignupValidation')
// const userRequireAuth = require('../middleware/userRequireAuth');

// express router
const router = express();

router.post("/signup", validation(userSignupValidation), signupUser);
router.post("/login",  loginUser);
// router.post("/login", userRequireAuth, loginUser);


module.exports = router