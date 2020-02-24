const sendMail = (user, callback) => {
    const transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 587,
        secure: false,
        auth: {
            user: "webmaster.dmty@gmail.com",
            pass: "azrwXAeX1997"
        }
    });
    const mailOptions = {
        from: `Bookmag <webmaster.dmty@gmail.com>`,
        to: `<${user.email}>`,
        subject: `<${user.subject}>`,
        html: `<${user.text}>`
    };

    transporter.sendMail(mailOptions, callback);
}

module.exports = sendMail;