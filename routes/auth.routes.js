const express = require('express');
const router = express.Router();
const { CreateUser, loginUserController, handleRefrshToken, logout, getUser, updateaUser } = require('../controllers/users.controller');
const { authMiddleware } = require('../middlewares/authMiddleware');
router.post('/Register', CreateUser);
router.post('/Login', loginUserController);
router.get('/Logout', logout);
router.get('/get-user',authMiddleware,  getUser);
router.put('/update',authMiddleware ,updateaUser);
router.get('/refresh', handleRefrshToken)

module.exports = router;