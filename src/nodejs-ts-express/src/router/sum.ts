import { logger } from '../lib/logger';
import express from 'express';
const sumRouter: express.Router = express.Router();
import sumLogic from '../logic/sum';

sumRouter.route('/').get(function (req, res) {
  logger.info('[GET] API Access "/sum"');
  res.status(200).send(String(sumLogic(req.query)));
});

export default sumRouter;
