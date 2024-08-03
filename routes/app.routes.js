express = require("express");
const router = express.Router();
const {
  createTransaction,
  
  getUserTransactions,
  getUserTransaction,
} = require("../controllers/transactions.controller");
const { authMiddleware } = require("../middlewares/authMiddleware");
router.post("/transaction",authMiddleware ,createTransaction);
router.get("/transactions" ,authMiddleware, getUserTransactions);
router.get("/transaction/:id", authMiddleware ,getUserTransaction);

module.exports = router;
