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
    user: {
        type: String,
        required: true
    }
})
const Widthraw = model('Widthraw', WidthrawSchema);
module.exports = Widthraw;