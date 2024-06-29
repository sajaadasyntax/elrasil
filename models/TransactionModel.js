const mongoose = require("mongoose");

const transactionSchema = new mongoose.Schema({
  recieverName: {
    type: String,
       required: true
  },
  recieverPhone: {
    type: String,
     required: true
  },
  recieverEmail: {
    type: String,
     required: true
  },
});
const transactions = mongoose.model("transactions", transactionSchema);

module.exports = transactions;
