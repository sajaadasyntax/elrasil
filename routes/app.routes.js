const transactionController = require("../controllers/transactions.controller");
express = require("express");
const router = express.Router();
const {
  getTransactions,
  createTransaction,
  getTransaction,
  updateTransaction,
  deleteTransaction,
} = require("../controllers/transactions.controller");
router.post("/transactions", createTransaction);
router.get("/transactions/all", getTransactions);
router.get("/transaction/:id", getTransaction);
router.put("/transaction/:id", updateTransaction);
router.delete("/transaction/:id", deleteTransaction);

module.exports = router;
