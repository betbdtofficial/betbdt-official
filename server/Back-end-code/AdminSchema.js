const {Schema, model} = require('mongoose');

const adminLoginSchema = new Schema({
    username: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
});
const adminLogin = model("adminLogin", adminLoginSchema);
module.exports = adminLogin;