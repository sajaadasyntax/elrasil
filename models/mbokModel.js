const mongoose = require("mongoose"); // Erase if already required

// Declare the Schema of the Mongo model
var MBokSchema = new mongoose.Schema(
  {
    mBbokNumber : {
      type: Number,
      required: true,
    },
    mBbokName : {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

//Export the model
const MBOk = mongoose.model("MBOK", MBokSchema);
module.exports ={ MBOk };
