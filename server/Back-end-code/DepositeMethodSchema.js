const { Schema, model } = require("mongoose");
const DepositSchema = new Schema({
  gatewayName: {
    type: String,
    required: true,
  },
  number: {
    type: String,
    required: true,
  },
});

const depositMethod = model("depositMethod", DepositSchema);
module.exports = depositMethod;
