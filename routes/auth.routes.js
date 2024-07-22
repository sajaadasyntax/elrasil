const express = require('express');
const router = express.Router();
const { CreateUser, loginUserController } = require('../controllers/users.controller');
router.post('/Register', CreateUser);
router.post('/Login', loginUserController);

module.exports = router;