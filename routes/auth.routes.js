const express = require('express');
const router = express.Router();
const { CreateUser } = require('../controllers/users.controller');
router.post('/Register', CreateUser);

module.exports = router;