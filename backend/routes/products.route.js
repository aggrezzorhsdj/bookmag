const express = require('express');
const app = express();
const productsRoute = express.Router();

// Products model
let Products = require('../models/products.model');

// Add Products
productsRoute.route('/create').post((req, res, next) => {
  Products.create(req.body, (error, data) => {
    if (error) {
      return next(error)
    } else {

      res.json(data)
    }
  })
});

// Get All Products
productsRoute.route('/').get((req, res) => {
  Products.find((error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})

// Get single Products
productsRoute.route('/read/:id').get((req, res, next) => {
  Products.findById(req.params.id, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})


// Update Products
productsRoute.route('/update/:id').post((req, res, next) => {
  Products.findByIdAndUpdate(req.params.id, {$set: req.body}, {new: true}, (error, data) => {
    if (error) {
      console.log(error);
      return next(error);
    } else {
      res.json(data)
      console.log(req.body)
      console.log(data)
      console.log('Data updated successfully')
    }
  })
})

// Delete Products
productsRoute.route('/delete/:id').delete((req, res, next) => {
  Products.findOneAndRemove({_id: req.params.id}, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.status(200).json(data)
      console.log(`id of removing element ${req.params.id}`);
      console.log(`removing data in api ${data}`);
    }
  })
})

module.exports = productsRoute;
