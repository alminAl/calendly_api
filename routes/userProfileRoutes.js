const express = require('express');
const { userProfile, updateUser } = require('../controllers/userController');
const userRequireAuth = require('../middleware/userRequireAuth');

// express router
const userProfileRoutes = express();
userProfileRoutes.use(userRequireAuth);


// // get user
userProfileRoutes.get("/", userProfile);


// update user
userProfileRoutes.patch("/", updateUser)


// export modules
module.exports = userProfileRoutes;