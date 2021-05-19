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
    number:{
        type: String,
        required: true
    },
    username: {
        type: String,
        required: true
    },
    club: {
        type: String
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