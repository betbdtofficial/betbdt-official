const {Schema, model} = require('mongoose');

const UserSchema = new Schema({
    name:{
        type: String,
        required: true,
    },
    country:{
        type: String,
        required: true
    },
    club:{
        type: String,
        required: true
    },
    number:{
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
    password:{
        type: String,
        required: true
    },
    password2:{
        type: String,
        required: true
    }
})

const UserInfo = model('UserInfo', UserSchema);
module.exports = UserInfo;