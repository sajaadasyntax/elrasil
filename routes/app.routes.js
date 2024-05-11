const transactionController = require("../controllers/transactions.controller");
express = require("express");
const router = express.Router();

router.post("/api/transaction", transactionController.create);
router.get("/transactions/all", transactionController.all);
router.get("/api/transaction", transactionController.findAll);
router.get("/transaction/:id", transactionController.findOne);
router.put("/transaction/:id", transactionController.update);
router.delete("/transaction/:id", transactionController.delete);

module.exports = router;