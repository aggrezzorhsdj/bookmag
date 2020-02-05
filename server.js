const cors = require('cors');
const bodyParser = require('body-parser');
const jwt = require('jsonwebtoken');
const express = require('express');

const app = express();
app.use(cors());
app.use(bodyParser.json());

let users = [
  {user: 'ivan', password: 'qwerty1234asd'}
];
localStorage.setItem("users", JSON.stringify(users));

const JWT_SECRET = 'af34dac1r1qwg2';
