const { Transaction } = require("../models/TransactionModel");
const User = require("../models/UserModel");
const asyncHandler = require("express-async-handler");
const { Currency } = require("../models/currencyRates");
const { MBOk } = require("../models/mbokModel");


const getUserTransaction = asyncHandler(async (req, res) => {
  try {  
    const { id } = req.params;
    const trans = await Transaction.findById(id);
    res.status(200).json(trans);
  } catch (error) {
    res.status(500).send({ message: "Transaction not found" });
  }
});


const getUserTransactions = asyncHandler(async (req, res) => {
  try {  const cookies = req.cookies;
    if (!cookies?.refreshToken) throw new Error("No refresh token in cookies");
    const refreshToken = cookies.refreshToken;
    const user = await User.findOne({ refreshToken });
    const trans = await Transaction.find({senderID : user?.id});
    res.status(200).json(trans);
  } catch (error) {
    res.status(404).send({ message: "Transaction not found" });
  }
});

const createTransaction = asyncHandler(async (req, res) => {
  const cookies = req.cookies;
if (!cookies?.refreshToken) throw new Error("No refresh token in cookies");
const refreshToken = cookies.refreshToken;
  const user = await User.findOne({ refreshToken });

  const trans = new Transaction({
    recieverName: req?.body?.recieverName,
    recieverPhone: req?.body?.recieverPhone,
    recieverEmail: req?.body?.recieverEmail,
    PaymentProof: req?.body?.PaymentProof,
    TransactionAmount: req?.body?.TransactionAmount,
    purposeOfTransaction: req?.body?.purposeOfTransaction,
    senderID: user?.id,
  });

  try {
    await trans.save();
    res.send(trans);
  } catch (error) {
    res.status(500).send(error);
  }
});


const getRate = asyncHandler(async (req, res) => {
  try {  
   const id = "66ae214b90a4b20dde155544";
    const rate = await Currency.findById(id);
    res.status(200).json(rate);
  } catch (error) {
    res.status(500).send({ message: "rate not available" });
  }
});


const getMBokDetails = asyncHandler(async (req, res) => {
  try {  
   const id = "66af8549ff9c717184eaa777";
    const mbok = await MBOk.findById(id);
    res.status(200).json(mbok);
  } catch (error) {
    res.status(500).send({ message: "mbok not available" });
  }
});

module.exports = {
  getUserTransactions,
  createTransaction,
  getUserTransaction,
  getRate,
  getMBokDetails
};
