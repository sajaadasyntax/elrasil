const express = require('express');
const router = express.Router();
const { authMiddleware, isAdmin } = require('../middlewares/authMiddleware');
const { getAllUsers, deleteUser, updateaUserforAdmin, getTransactions, getTransaction, updateTransaction, deleteTransaction, getUserForAdmin, updateRate } = require('../controllers/admin.controller');
router.get('/users',authMiddleware, isAdmin,getAllUsers);
router.delete('/user/:id',authMiddleware, isAdmin, deleteUser);
router.put('/user/:id',authMiddleware, isAdmin,updateaUserforAdmin);
router.get("/transactions" ,authMiddleware,isAdmin, getTransactions);
router.get("/transaction/:id", authMiddleware ,getTransaction);
router.put("/transaction/:id", authMiddleware, isAdmin,updateTransaction);
router.delete("/transaction/:id", authMiddleware, isAdmin,deleteTransaction);
router.get('/user/:id',authMiddleware, isAdmin,  getUserForAdmin);
router.put("/rate",authMiddleware ,isAdmin, updateRate);





module.exports = router;