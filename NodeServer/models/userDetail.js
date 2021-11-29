const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    name: String,
    email: String,
    Created_date: {
        type: Date,
        default: Date.now
    }
});

const userDetail = mongoose.model('userDetail', userSchema);
module.exports = userDetail;