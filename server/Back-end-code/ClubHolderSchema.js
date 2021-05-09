const {Schema, model} = require('mongoose');

const clubHolderSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    country:{
        type: String,
        required: true
    },
    club: {
        type: String,
        required: true
    },
    number: {
        type: String,
        required: true
    },
    sponsor:{
        type: String,
        required: true
    },
    username: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    password2:{
        type: String,
        required: true
    },
    profit: {
        type: String,
        required: true
    },
    balance: {
        type: String,
        required: true
    }
})

const clubHolder = model("clubHolder", clubHolderSchema);
module.exports = clubHolder;