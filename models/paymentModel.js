const mongoose = require("mongoose"); // Erase if already required

// Declare the Schema of the Mongo model
var paymentSchema = new mongoose.Schema(
  {
    transactions: [
      {
        transactions: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "Transaction",
        },
        count: Number,
        color: String,
      },
    ],
    paymentIntent: {},
    paymentStatus: {
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
    by: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
  },
  {
    timestamps: true,
  }
);

//Export the model
module.exports = mongoose.model("Payment", paymentSchema);