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
  purposeOfTransaction: {
    type: String,
     required: true
  },
  TransactionAmount: {
    type: String,
     required: true
  },
  PaymentProof: {
    type: String,
     required: true
  },
  PaymentStatus: {
    type: String,
    default: "Not Processed",
    enum: [
      "Not Processed",
      "Processing",
      "Dispatched",
      "Cancelled",
      "Delivered",
    ],
  },
},
{
  timestamps : true,
});
const Transaction = mongoose.model("Transaction", transactionSchema);

module.exports ={ Transaction };
