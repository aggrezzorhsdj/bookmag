const cors = require('cors');
const bodyParser = require('body-parser');
const jwt = require('jsonwebtoken');
const express = require('express');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const usersScheme = new Schema({
  login: String,
  password: String,
  email: String
});

const productsScheme = new Schema({
  article: String,
  name: String,
  price: Number
});
const User = mongoose.model("User", usersScheme);
mongoose.connect("mongodb://localhost:27017/bookmagdb", { useNewUrlParser: true }, function (err) {
  if(err) return console.log(err);
  app.listen(3000, function () {
    console.log("Сервер ожидает подключения");
  })
});

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.post('/api/authenticate', (req, res) => {
  if (req.body) {
    const user = req.body;
    User.findOne({login: user.login, password: user.password}, function (err, user) {
      if(err) {
        res.status(403).send({
          errorMessage: 'Authorisation required!'
        });
        return console.log(err);
      }
      let token = jwt.sign(user, JWT_SECRET);
      res.status(200).send({
        signed_user: user,
        token: token
      });
    })
  } else {
    res.status(403).send({
      errorMessage: 'Please provide email and password'
    });
  }
});

const JWT_SECRET = 'af34dac1r1qwg2';
