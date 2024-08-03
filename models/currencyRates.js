const mongoose = require("mongoose"); // Erase if already required

// Declare the Schema of the Mongo model
var CurrencySchema = new mongoose.Schema(
  {
    rate : {
      type: Number,
      required: true,
    }
  },
  {
    timestamps: true,
  }
);

//Export the model
module.exports = mongoose.model("Currency", CurrencySchema);