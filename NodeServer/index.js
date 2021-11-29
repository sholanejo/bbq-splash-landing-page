const express = require('express');
const nodemailer = require('nodemailer');
const multiparty = require('multiparty');
require('dotenv').config();
const path = require('path');
const userDetail = require('./models/userDetail');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/myDb', { useNewUrlParser: true });
const app = express();
const port = process.env.PORT || 8080;

app.use(express.static(__dirname + '/src'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }))
app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, '/src/index.html'));
})
app.post('/send', async(req, res) => {
    await userDetail.create(req.body, (error, userDetail) => {
        res.redirect('/');
    })
})
app.listen(port);
console.log('Server started at http://localhost:' + port);