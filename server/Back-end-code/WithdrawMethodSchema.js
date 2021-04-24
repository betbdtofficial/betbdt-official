const { Schema, model } = require("mongoose");
const MethodSchema = new Schema({
  gatewayName: {
    type: String,
    required: true,
  },
  number: {
    type: String,
    required: true,
  },
});

const withdrawMethod = model("withdrawMethod", MethodSchema);
module.exports = withdrawMethod;
