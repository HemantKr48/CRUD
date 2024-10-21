const mongoose = require('mongoose');

const userSChema = new mongoose.Schema({
    first_name: {
        type: String,
        required: true,
    },
    last_name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    gender: {
        type: String,
        required: true
    },
    job_title: {
        type: String
    }

})
module.exports= mongoose.model('User', userSChema);