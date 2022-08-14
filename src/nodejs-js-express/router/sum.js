'use strict';

const { logger } = require('../lib/logger');
const sumRouter = require('express').Router();
const sumLogic = require('../logic/sum');

sumRouter.route('/').get(function (req, res) {
  logger.info('[GET] API Access "/sum"');
  res.status(200).send(String(sumLogic(req.query)));
});

module.exports = sumRouter;
