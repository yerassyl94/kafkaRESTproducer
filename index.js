const express = require('express');
const app = express();
const port = 6000;

const receiver = require('./src/api/receiver');

app.use(receiver);

app.listen(port,function () {
    console.log('Server running on port:',port)
});
