// const nodemailer = require('nodemailer');
// const multiparty = require("multiparty");
// require("dotenv").config();

// const transporter = nodemailer.createTransport({
//     host: "smtp.gmail.com",
//     port: 587,
//     auth: {
//         user: process.env.EMAIL,
//         pass: process.env.PASS,
//     },
// });
// transporter.verify(function(error, success) {
//     if (error) {
//         console.log(error);
//     } else {
//         console.log("Server is ready to take our messages");
//     }
// });
// app.post("/send", (req, res) => {
//     //1.
//     let form = new multiparty.Form();
//     let data = {};
//     form.parse(req, function(err, fields) {
//         console.log(fields);
//         Object.keys(fields).forEach(function(property) {
//             data[property] = fields[property].toString();
//         });

//         //2. You can configure the object however you want
//         const mail = {
//             from: data.name,
//             to: data.email,
//             text: `${data.name} <${data.email}>`,
//         };

//         //3.
//         transporter.sendMail(mail, (err, data) => {
//             if (err) {
//                 console.log(err);
//                 res.status(500).send("Something went wrong.");
//             } else {
//                 res.status(200).send("Email successfully sent to recipient!");
//             }
//         });
//     });
// });