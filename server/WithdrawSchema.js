const {Schema, model} = require("mongoose");

const WidthrawSchema = new Schema({
    method: {
        type: String,
        required: true
    },
    type: {
        type: String,
        required: true
    },
    amount: {
        type: String,
        required: true
    },
    to:{
        type: String,
        required: true
    },
    username: {
        type: String,
        required: true
    },
    date:{
        type: String,
        required: true
    },
    button: {
        type: String,
        required: true
    }
})
const Widthraw = model('Widthraw', WidthrawSchema);
module.exports = Widthraw;