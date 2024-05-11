const transactionServices = require("../services/transaction.services")
const upload = require("../middlewares/upload");
const { transaction } = require("../models/TransactionModel");


exports.create = (req , res , next) => {
  upload(req, res, function (err){
        if (err) {
            return next(err);
        }
        else {
       const url = req.protocol + "://" + req.get(host);
       const path = req.file != undefined ? req.file.path.replace(/\\/g, "/")  : "" ;

      var model = {
        recieverName: req.body.reciever_name,
        recieverBankAccount: req.body.reciever_bankAccount,
        transactionAmount: req.body.transaction_amount,
        transactionImage: path != ""? url + "/" + path : "",
        transactionImageUrl: url + "/uploads/" + path
      };

      transactionServices.createTransaction(model, (error, results) => {
        if (error) {
          return next(error);
        } else {
          res.status(200).send({
            message: "Transaction created successfully",
            data: results,
          });
        }
      });
    }     
    });
};

exports.findAll = (req , res , next) => {
   var model = {
          recieverName: req.query.reciever_name,
        };
  
        transactionServices.getTransaction(model, (error, results) => {
          if (error) {
            return next(error);
          } else {
            res.status(200).send({
              message: "Transaction created successfully",
              data: results,
            });
          }
        });
     
  };

  exports.findOne = (req , res , next) => {
    var model = {
           transactionId: req.params.transaction_id,
         };
   
         transactionServices.getTransactionByID(model, (error, results) => {
           if (error) {
             return next(error);
           } else {
             res.status(200).send({
               message: "Transaction created successfully",
               data: results,
             });
           }
         });
      
   };   

   exports.update = (req , res , next) => {
    upload(req, res, function (err){
          if (err) {
              return next(err);
          }
          else {
         const url = req.protocol + "://" + req.get(host);
         const path = req.file != undefined ? req.file.path.replace(/\\/g, "/")  : "" ;
  
        var model = {
          recieverName: req.body.reciever_name,
          recieverBankAccount: req.body.reciever_bankAccount,
          transactionAmount: req.body.transaction_amount,
          transaction_id: req.params.transaction_id,
          transactionImage: path != ""? url + "/" + path : "",
          transactionImageUrl: url + "/uploads/" + path
        };
  
        transactionServices.updateTransaction(model, (error, results) => {
          if (error) {
            return next(error);
          } else {
            res.status(200).send({
              message: "Transaction created successfully",
              data: results,
            });
          }
        });
      }     
      });
  };

  exports.delete = (req , res , next) => {
    var model = {
           transactionId: req.params.transaction_id,
         };
   
         transactionServices.deleteTransaction(model, (error, results) => {
           if (error) {
             return next(error);
           } else {
             res.status(200).send({
               message: "Transaction created successfully",
               data: results,
             });
           }
         });
      
   }; 