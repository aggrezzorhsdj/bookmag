const express = require('express');
const multer = require('multer');
const path = require('path');
const app = express();
const productsRoute = express.Router();

// File upload settings
const PATH = './assets/images';

let storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, PATH);
  },
  filename: (req, file, cb) => {
    cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname))
  }
});
const fileFilter = (req, file, cb) => {

  if(file.mimetype === "image/png" ||
      file.mimetype === "image/jpg"||
      file.mimetype === "image/jpeg"){
    cb(null, true);
  }
  else{
    cb(null, false);
  }
}
let upload = multer({
  storage: storage,
  fileFilter: fileFilter
});

// Products model
let Products = require('../models/products.model');

productsRoute.route('/create').post(upload.single('file'), (req, res, next) => {
  console.log(req.body);
  let data = JSON.parse(req.body.data);
  data.image = req.file.filename;
  Products.create(data, (error, data) => {
    if (error) {
      return next(error);
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
