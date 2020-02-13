const express = require('express'),
  path = require('path'),
  mongoose = require('mongoose'),
  cors = require('cors'),
  bodyParser = require('body-parser'),
  dbConfig = require('./database/db'),
  config = require('./config/config'),
  createError = require('http-errors')


mongoose.Promise = global.Promise;
mongoose.connect(dbConfig.dbremote, {
  useUnifiedTopology: true,
  useNewUrlParser: true
  }).then(() => {
    console.log('Database sucessfully connected')
  },
  error => {
    console.log('Database could not connected: ' + error)
  }
)

const productsRoute = require('./routes/products.route')
const usersRoute = require('./routes/users.route');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: false
}));

app.use(cors());

app.use(express.static(path.join(__dirname, '../dist/bookmag')));
app.use('/', express.static(path.join(__dirname, '../dist/bookmag')));

app.use('/api/products', productsRoute)

app.use('/api/users/', usersRoute);

const port = process.env.PORT || 4000;
const server = app.listen(port, () => {
  console.log('Connected to port ' + port)
})

// Find 404 and hand over to error handler
app.use((req, res, next) => {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  console.error(err.message);
  if (!err.statusCode) err.statusCode = 500;
  res.status(err.statusCode).send(err.message);
});
