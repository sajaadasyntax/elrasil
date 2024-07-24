const express = require('express');
const router = express.Router();
const { CreateUser, loginUserController, getAllUsers, getUser, updateUser, deleteUser, updateaUser } = require('../controllers/users.controller');
const authMiddleware = require('../middlewares/authMiddleware');
router.post('/Register', CreateUser);
router.post('/Login', loginUserController);
router.get('/all-users', getAllUsers);
router.get('/:id', authMiddleware, getUser);
router.delete('/:id', deleteUser);
router.put('/:id', updateaUser);

module.exports = router;