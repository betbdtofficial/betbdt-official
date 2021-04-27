const {Schema, model} = require("mongoose");

const DepositSchema = new Schema({
    method: {
        type: String,
        required: true
    },
    amount: {
        type: String,
        required: true
    },
    from:{
        type: String,
        required: true
    },
    user: {
        type: String,
        required: true
    }
})
const Deposit = model('Deposit', DepositSchema);
module.exports = Deposit;