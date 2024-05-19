const mongoose = require("mongoose");

const transactionSchema = new mongoose.Schema({
  reciever_name: {
    type: String,
       required: true
  },
  reciever_bankAccount: {
    type: String,
     required: true
  },
  transaction_amount: {
    type: Number,
     required: true
  },
});
const transactions = mongoose.model("transactions", transactionSchema);

module.exports = transactions;
