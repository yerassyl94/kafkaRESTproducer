const express = require('express');
const bodyParser = require('body-parser');
const receiver = express();
const producer = require('../kafka/producer');

receiver.use(bodyParser.json());

receiver.route('/getMessage').post(function (req,res) {
    producer(JSON.stringify(req.body));
    res.status(200);
});

module.exports = receiver;
