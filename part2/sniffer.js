const express = require('express');
const http = require('http');
const app = require('./app');
const app = express();

let min = 3000;
let max = 4000;



for (let i = min; i <= max; i++)
{
    server.listen(process.env.PORT  ||i);
}