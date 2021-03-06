const express = require('express')
  path = require('path'),
  mongoose = require('mongoose'),
  cors = require('cors'),
  bodyParser = require('body-parser'),
  dbConfig = require('./database/db'),
  config = require('./config/config'),
  createError = require('http-errors'),
  multer = require('multer'),
  sendMail = require('nodemailer')


mongoose.Promise = global.Promise;
mongoose.connect(dbConfig.dbremote, {
  useUnifiedTopology: true,
  useNewUrlParser: true,
  useFindAndModify: false,
  useCreateIndex: true
}).then(() => {
    console.log('Database sucessfully connected')
  },
  error => {
    console.log('Database could not connected: ' + error)
  }
)

const productsRoute = require('./routes/products.route')
const usersRoute = require('./routes/users.route');
const emailRoute = require('./routes/email.route');
const orderRoute = require('./routes/order.route');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: false
}));

app.use(cors());



app.use('/api/products', productsRoute)
app.use('/api/users/', usersRoute);
app.use('/api/mail/', emailRoute);
app.use('/api/order/', orderRoute);

app.use(express.static(__dirname + '/dist/bookmag'));
app.use(express.static('assets'));
// Send all requests to index.html
app.get('/*', function(req, res) {
  res.sendFile(path.join(__dirname + '/dist/bookmag/index.html'));
});

const port = process.env.PORT || 8080;
const server = app.listen(port, () => {
  console.log('Connected to port ' + port)
})


// Find 404 and hand over to error handler
app.use((req, res, next) => {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  console.error(err.statusCode);
  if (!err.statusCode) err.statusCode = 500;
  res.status(err.statusCode).send(err.message);
});
