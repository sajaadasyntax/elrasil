express = require("express");
const router = express.Router();
const {
  getTransactions,
  createTransaction,
  getTransaction,
  updateTransaction,
  deleteTransaction,
} = require("../controllers/transactions.controller");
const { authMiddleware, isAdmin } = require("../middlewares/authMiddleware");
router.post("/transaction",authMiddleware ,createTransaction);
router.get("/transactions/all" ,getTransactions);
router.get("/transaction/:id", authMiddleware ,getTransaction);
router.put("/transaction/:id", authMiddleware ,updateTransaction);
router.delete("/transaction/:id", authMiddleware, isAdmin ,deleteTransaction);

module.exports = router;
