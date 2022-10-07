const express = require('express');
const { signupUser, loginUser } = require('../controllers/userController');
const userRequireAuth = require('../middleware/userRequireAuth');

// express router
const router = express();

router.post("/signup", signupUser);
router.post("/login", userRequireAuth, loginUser);

module.exports = router