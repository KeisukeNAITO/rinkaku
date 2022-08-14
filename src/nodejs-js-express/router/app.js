'use strict';

const express = require('express');
const rootRouter = require('./root');
const sumRouter = require('./sum');

const app = express();

app.use('/', rootRouter);
app.use('/sum', sumRouter);

module.exports = app;
