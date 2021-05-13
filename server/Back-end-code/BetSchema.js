const { Schema, model } = require("mongoose");
const BetSchema = new Schema({
  username: {
    type: String,
    required: true
  },
  date: {
    type: String,
    required: true,
  },
  match1: {
    type: String,
    required: true,
  },
  match2: {
    type: String,
    required: true,
  },
  betTitle: {
    type: String,
    required: true,
  },
  betAmount: {
    type: String,
    required: true,
  },
  betRate: {
    type: String,
    required: true,
  },
  winingAmount: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    required: true
  }
})
const bets = model("bets", BetSchema)
module.exports = bets
