const { Transaction } = require("../models/TransactionModel");
const { Currency } = require("../models/currencyRates");
const User = require("../models/UserModel");
const validateMongodbid = require("../_util/validatemongodbID");
const asyncHandler = require("express-async-handler");

const getAllUsers = asyncHandler(async (req, res) => {
  try{
    const getUsers = await User.find();
    res.json(getUsers);  

   } catch(error){ {
     throw new Error(error);
   }
 
}});

const deleteUser = asyncHandler(async (req, res) => {
  const {id} = req.params;
  validateMongodbid(id);

 try{
  const deleteuser = await User.findByIdAndDelete(id);
  res.json("user deleted successfully", deleteuser.firstname, deleteuser.lastname);    
 } catch(error){
   throw new Error(error);
 }
});

const updateaUserforAdmin = asyncHandler(async (req, res) => {
  const {id} = req.params;
  validateMongodbid(id);

 try{
  const updateduser = await User.findByIdAndUpdate(id,
      {
          firstname : req?.body?.firstname,
          lastname : req?.body?.lastname,
          mobile : req?.body?.mobile,
          email : req?.body?.email,
      },
    {
      new: true,
    });
  console.log(updateduser.firstname)
  res.json("user updated successfully");    
 } catch(error){
   throw new Error(error);
 }
});


const getTransactions =   asyncHandler( async (req, res) => {
  try{
    const gettransactions = await Transaction.find();
    res.json(gettransactions);  

   } catch(error){ {
     throw new Error(error);
   }}
 
});

const getTransaction = asyncHandler(async (req, res) => {
  try {  
    const { id } = req.params;
    const trans = await Transaction.findById(id);
    res.status(200).json(trans);
  } catch (error) {
    res.status(500).send({ message: "Transaction not found" });
  }
});


const updateTransaction = asyncHandler(async (req, res) => {
  try {
    const { id } = req.params;
    const trans = await Transaction.findByIdAndUpdate(id, {
      recieverName : req?.body?.recieverName,
      recieverPhone : req?.body?.recieverPhone,
      purposeOfTransaction : req?.body?.purposeOfTransaction,
      TransactionAmount : req?.body?.TransactionAmount,
      PaymentProof : req?.body?.PaymentProof,
      PaymentStatus : req?.body?.PaymentStatus,

    },
  {
    new: true,
  });
    if (!trans) {
      res.status(404).send({ message: "Transaction not found" });
    }

    const updatedTrans = await Transaction.findById(id);
    res.status(200).json(updatedTrans);
  } catch (error) {
    res.status(404).send({ message: "Transaction not found" });
  }
});

const deleteTransaction = asyncHandler(async (req, res) => {
  try {
    const { id } = req.params;

    const trans = await Transaction.findByIdAndDelete(id);
    if (!trans) {
      res.status(404).json({ message: "transaction not found" });
    }
    res.status(200).json({ message: "transaction deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

const getUserForAdmin = asyncHandler(async (req, res) => {
  const {id} = req.params;
  validateMongodbid(id);
 try{
  const getuser = await User.findById(id);
  res.json(getuser);    
 } catch(error){
   throw new Error(error);
 }
});

const updateRate = asyncHandler(async (req, res) => {
  const cookies = req.cookies;
if (!cookies?.refreshToken) throw new Error("No refresh token in cookies");
const refreshToken = cookies.refreshToken;
  const user = await User.findOne({ refreshToken });
  try {
  const id = "66ae214b90a4b20dde155544";
  const rate = await Currency.findByIdAndUpdate(id, {
    rate : req?.body?.rate,

  },
    {
      new: true,
    });
 
    res.status(200).send(rate);
  } catch (error) {
    res.status(500).send(error);
  }
});
module.exports = { getAllUsers , getUserForAdmin ,deleteUser, updateaUserforAdmin,  getTransactions, updateTransaction,deleteTransaction,getTransaction, updateRate};
