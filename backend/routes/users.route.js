const express = require('express');
const app = express();
const usersRoute = express.Router();
const bodyParser = require('body-parser');
const jwt = require('jsonwebtoken');
const config = require('../config/config');

// Users model
let Users = require('../models/users.model');

// Get User
usersRoute.route('/authenticate').post((req, res, next) => {

  Users.findOne({login: req.body.login, password: req.body.password}, (error, data) => {
    if (error) {
      return next(error)
    } else {
      if(data !== null) {
        console.log(data);
        let token = jwt.sign(data.login+data.password, config.secret);
        res.status(200).send({
          signed_user: data,
          token: token
        });
      } else {
        res.status(403).send({
          errorMessage: "Authorized required, please check you login data"
        });
      }
    }
  })
});

// Get All Users
usersRoute.route('/').get((req, res) => {
  Users.find((error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})
//
// Get single Users
usersRoute.route('/read/:id').get((req, res) => {
  Users.findById(req.params.id, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})
//
//
// Update Users
usersRoute.route('/update/:id').post((req, res, next) => {
  Users.findByIdAndUpdate(req.params.id, {
    $set: req.body
  }, (error, data) => {
    if (error) {
      console.log(error);
      return next(error);
    } else {
      res.json(data)
      console.log('Data updated successfully')
    }
  })
})
//
// // Delete Users
// usersRoute.route('/delete/:id').delete((req, res, next) => {
//   Users.findOneAndRemove(req.params.id, (error, data) => {
//     if (error) {
//       return next(error);
//     } else {
//       res.status(200).json({
//         msg: data
//       })
//     }
//   })
// })

module.exports = usersRoute;
