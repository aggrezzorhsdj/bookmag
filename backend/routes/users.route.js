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
  console.log(req);
  Users.findOne({login: req.body.login, password: req.body.password}, (error, data) => {
    if (error) {
      return next(error)
    } else {
      if(data !== null) {
        let token = jwt.sign(data.login+data.password, config.secret);
        res.status(200).send({
          id: data._id,
          login: data.login,
          password: data.password,
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
usersRoute.route('/read/:id').get((req, res, next) => {
  Users.findOne({_id: req.params.id}, (error, data) => {
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
  Users.findByIdAndUpdate(req.params.id, {$set: req.body}, {new: true}, (error, data) => {
    if (error) {
      console.log(error);
      return next(error);
    } else {
      res.json();
      console.log(res.json());
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
