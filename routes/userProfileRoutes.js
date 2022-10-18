const express = require('express');
const { userProfile, updateUser } = require('../controllers/userController');
const userRequireAuth = require('../middleware/userRequireAuth');

// express router
const userProfileRoutes = express();
userProfileRoutes.use(userRequireAuth);


// // get user
userProfileRoutes.get('/:id', userProfile);

// update user
userProfileRoutes.patch("/updatedUser/:id", updateUser);

// export modules
module.exports = userProfileRoutes;