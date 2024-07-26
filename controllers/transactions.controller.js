const Transaction = require("../models/TransactionModel");

const getTransactions = async (req, res) => {
  try {
    const trans = await Transaction.find({});
    res.status(200).json(trans);
  } catch (error) {
    res.status(404).send({ message: "Book not found" });
  }
};

const createTransaction = async (req, res) => {
  const trans = new Transaction({
    recieverName: req.body.recieverName,
    recieverPhone: req.body.recieverPhone,
    recieverEmail: req.body.recieverEmail,
  });

  try {
    await trans.save();
    res.send(trans);
  } catch (error) {
    res.status(500).send(error);
  }
};

const getTransaction = async (req, res) => {
  try {
    const { id } = req.params;
    const trans = await Transaction.findById(id);
    res.status(200).json(trans);
  } catch (error) {
    res.status(500).send({ message: "Book not found" });
  }
};

const updateTransaction = async (req, res) => {
  try {
    const { id } = req.params;
    const trans = await Transaction.findByIdAndUpdate(id, req.body);
    if (!trans) {
      res.status(404).send({ message: "Book not found" });
    }

    const updatedTrans = await Transaction.findById(id);
    res.status(200).json(updatedTrans);
  } catch (error) {
    res.status(500).send({ message: "Book not found" });
  }
};

const deleteTransaction = async (req, res) => {
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
};
module.exports = {
  getTransactions,
  createTransaction,
  updateTransaction,
  deleteTransaction,
  getTransaction,
};
