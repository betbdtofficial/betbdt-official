const { Schema, model } = require("mongoose");
const depoHisSchema = new Schema({
  username: {
    type: String,
    required: true,
  },
  from: {
    type: String,
    required: true,
  },
  method: {
    type: String,
    required: true,
  },
  amount: {
    type: Number,
    requird: true,
  },
  date: {
    type: String,
    required: true,
  },
  button: {
    type: String,
    required: true
  }
});
const depoHistory = model("depoHistory", depoHisSchema);
module.exports = depoHistory;