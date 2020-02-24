const express = require('express');
const multer = require('multer');
const path = require('path');
const sendMail = require('nodemailer');
const app = express();
const emailRouter = express.Router();

emailRouter.route('/send').post((req, res) => {
    console.log('sending email');
    let user = req.body;
    sendMail(user, (err, info) => {
        if (err) {
            console.log(err);
            res.status(400);
            res.send({ error: "Failed to send email" });
        } else {
            console.log("Email has been sent");
            res.send(info);
        }
    });
});