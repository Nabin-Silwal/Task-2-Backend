const mongoose = require("mongoose");

const Wallet = mongoose.model(
  "Wallet",
  new mongoose.Schema({
    address: { type: String, required: true },
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  })
);

module.exports = Wallet;
