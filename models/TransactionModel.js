const mongoose = require("mongoose");

const transactionSchema = new mongoose.Schema({
  senderID: {
    type: String,
       required: true
  },
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
  PaymentProof: {
    type: String,
     required: true
  },
},
{
  timestamps : true,
});
const transactions = mongoose.model("transactions", transactionSchema);

module.exports = transactions;
