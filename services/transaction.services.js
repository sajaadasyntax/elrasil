const { transaction } = require("../models/TransactionModel");

async function createTransaction(params, callback) {
    if (!params.reciever_name) {
        return callback(new Error("reciever name required"));
    }

    const TransactionModel =  transaction(params);
    TransactionModel
    .save()
    .then((response) => {
        callback(null, response);
    })
    .catch((error) => {
        callback(error);
    }); 
}

async function getTransaction(params, callback) {
     const recieverName = params.reciever_name;
     var condition = recieverName
     ? {
        recieverName : {$regex: new RegExp(recieverName), $options: "i"}
     }
        : {};
     

    const TransactionModel =  transaction(params);
    TransactionModel
    .find(condition)
    .then((response) => {
        callback(null, response);
    })
    .catch((error) => {
        callback(error);
    }); 
}


async function getTransactionByID(params, callback) {
    const transactionID = params.transaction_ID;

    

   const TransactionModel =  transaction(params);
   TransactionModel
   .findById(transactionID)
   .then((response) => {
       callback(null, response);
   })
   .catch((error) => {
       callback(error);
   }); 
}

async function getTransactionByID(params, callback) {
    const transactionID = params.transaction_ID;

       transaction
   .findById(transactionID)
   .then((response) => {
    if (!response) callback ("Transaction not found")
    else return   callback(null, response);
   })
   .catch((error) => {
       callback(error);
   }); 
}

async function updateTransaction(params, callback) {
    const transactionID = params.transaction_ID;

       transaction
   .findByIdAndUpdate(transactionID, params , { useFindAndModify: false})
   .then((response) => {
    if (!response) callback ("Transaction not found")
    else return   callback(null, response);
   })
   .catch((error) => {
       callback(error);
   }); 
}

async function deleteTransaction(params, callback) {
    const transactionID = params.transaction_ID;

       transaction
   .findByIdAndRemove(transactionID)
   .then((response) => {
    if (!response) callback ("Transaction not found")
    else return   callback(null, response);
   })
   .catch((error) => {
       callback(error);
   }); 
}

module.exports = {
    createTransaction,
    getTransaction,
    getTransactionByID,
    updateTransaction,
    deleteTransaction,
};