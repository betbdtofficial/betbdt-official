const {Schema, model} = require("mongoose");

const DepositSchema = new Schema({
    method: {
        type: String,
        required: true
    },
    amount: {
        type: Number,
        required: true
    },
    from:{
        type: String,
        required: true
    },
    username: {
        type: String,
        required: true
    },
    date: {
        type: String,
        required: true
    },
    button:{
        type: String,
        required: true
    }
})
const Deposit = model('Deposit', DepositSchema);
module.exports = Deposit;