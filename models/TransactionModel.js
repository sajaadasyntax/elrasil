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
    type: Number,
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
const transaction = mongoose.model("Transaction", transactionSchema);

module.exports = transactions;
