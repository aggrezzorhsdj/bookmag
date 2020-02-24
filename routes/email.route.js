const express = require('express');
const app = express();
const emailRoute = express.Router();
const multer = require('multer');
const path = require('path');
const nodemailer = require('nodemailer');

const sendMail = (user, callback) => {
    const transporter = nodemailer.createTransport({
        service: "gmail",
        secure: false,
        auth: {
            user: "webmaster.dmty@gmail.com",
            pass: "azrwXAeX1997"
        }
    });
    const mailOptions = {
        from: `Bookmag <webmaster.dmty@gmail.com>`,
        to: user.email,
        subject: user.subject,
        html: user.text
    };

    transporter.sendMail(mailOptions, callback);
}

emailRoute.route('/send').post((req, res, next) => {
    let user = req.body;
    console.log(user);
    sendMail(user, (err, info) => {
        if (err) {
            console.log(err);
            res.send({ error: "Failed to send email" });
        } else {
            console.log("Email has been sent");
            res.send(info);
            transport.close();
        }
    });
});

module.exports = emailRoute;