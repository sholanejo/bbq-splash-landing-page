const mongoose = require('mongoose');
const userDetail = require('./models/userDetail');
mongoose.connect('mongodb://localhost/myDb', { useNewUrlParser: true });

userDetail.create({
    name: "Shola Nejo",
    email: "sholanejo@live.com"
}, (error, userDetail) => {
    console.log(error, userDetail)
})