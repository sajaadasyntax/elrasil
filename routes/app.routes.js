express = require("express");
const router = express.Router();
const {
  createTransaction,
  
  getUserTransactions,
  getUserTransaction,
  getRate,
  getMBokDetails,
} = require("../controllers/transactions.controller");
const { upload } = require('../middlewares/upload');

const { authMiddleware } = require("../middlewares/authMiddleware");
router.post("/transaction",authMiddleware ,upload.single('ID'),createTransaction);
router.get("/transactions" ,authMiddleware, getUserTransactions);
router.get("/transaction/:id", authMiddleware ,getUserTransaction);
router.get("/rate" ,authMiddleware, getRate);
router.get("/mbok" ,authMiddleware, getMBokDetails);


module.exports = router;
