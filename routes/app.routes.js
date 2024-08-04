express = require("express");
const router = express.Router();
const {
  createTransaction,
  
  getUserTransactions,
  getUserTransaction,
  getRate,
  getMBokDetails,
} = require("../controllers/transactions.controller");
const { authMiddleware } = require("../middlewares/authMiddleware");
router.post("/transaction",authMiddleware ,createTransaction);
router.get("/transactions" ,authMiddleware, getUserTransactions);
router.get("/transaction/:id", authMiddleware ,getUserTransaction);
router.get("/rate" ,authMiddleware, getRate);
router.get("/mbok" ,authMiddleware, getMBokDetails);


module.exports = router;
