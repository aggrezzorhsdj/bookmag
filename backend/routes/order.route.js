const express = require('express');
const app = express();
const orderRoute = express.Router();

let Orders = require('../models/order.model');

orderRoute.route('/create').post((req, res, next) => {
    // console.log(req.body);
    Orders.create(req.body, (error, data) => {
        if (error) {
            console.log(error);
            return next(error);
        } else {
            res.json(data);
        }
    })
});

module.exports = orderRoute;