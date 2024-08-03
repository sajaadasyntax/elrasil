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
const Currency = mongoose.model("Currency", CurrencySchema);
module.exports ={ Currency };
