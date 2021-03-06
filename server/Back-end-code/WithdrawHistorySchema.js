const { Schema, model } = require("mongoose");
const WithdrawHistorySchema = new Schema({
  username: {
    type: String,
    required: true,
  },
  club: {
    type: String,
  },
  number: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    required: true,
  },
  method: {
    type: String,
    required: true,
  },
  amount: {
    type: Number,
    required: true,
  },
  date: {
    type: String,
    required: true,
  },
  button: {
    type: String,
    required: true,
  },
});
const WithdrawHistory = model("withdrawHistory", WithdrawHistorySchema);
module.exports = WithdrawHistory;
