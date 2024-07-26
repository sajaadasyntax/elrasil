const express = require('express');
const router = express.Router();
const { CreateUser, loginUserController, getAllUsers, getUser, deleteUser, updateaUser, handleRefrshToken, logout } = require('../controllers/users.controller');
const { authMiddleware, isAdmin } = require('../middlewares/authMiddleware');
router.post('/Register', CreateUser);
router.post('/Login', loginUserController);
router.get('/Logout', logout);
router.get('/all-users', authMiddleware, isAdmin,getAllUsers);
router.get('/get-user',authMiddleware,  getUser);
router.delete('/delete',authMiddleware, isAdmin, deleteUser);
router.put('/update',authMiddleware ,updateaUser);
router.get('/refresh', handleRefrshToken)

module.exports = router;