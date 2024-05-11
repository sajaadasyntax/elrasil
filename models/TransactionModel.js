const mongoose = require('mongoose');

const transaction = mongoose.model(
    "transactions",
    mongoose.Schema(
    {
      reciever_name: {
            type: String,
            required: true
        },
        reciever_bankAccount: {
            type: String,
        },
        transaction_amount: {
            type: Number,
        },
        transaction_id: {
            type: Number,
        },
        transactionStatus: {
            type: String,
            enum: ["null", "pending", "sent"],
            default : "null"
            },
    },
    {
        timestamps: true
    }
)
)

module.exports = { transaction };