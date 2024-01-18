
const express = require('express');
const userRouter = express.Router();
const { createUser,
    getUserById,
    loginUser,
    getUsers,
    updateUser,
    deleteUser,
    addFavoriteCourse,
    removeFavoriteCourse } = require('../controllers/userController');

// User routes
userRouter.post('/register', createUser);
userRouter.post('/login', loginUser)
userRouter.get('/', getUsers);
userRouter.get('/:userId', getUserById);
userRouter.put('/:userId', updateUser);
userRouter.delete('/:userId', deleteUser);

// Add or remove from favorites
userRouter.post("/:userId/favorites",addFavoriteCourse)
userRouter.delete("/:userId/favorites",removeFavoriteCourse)


module.exports = { userRouter };
