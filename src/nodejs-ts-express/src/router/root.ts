import { logger } from '../lib/logger';
import express from 'express';
const rootRouter: express.Router = express.Router();

rootRouter
  .route('/')
  .get(function (req, res) {
    logger.info('[GET] API Access "/"');
    res.send('read');
  })
  .post(function (req, res) {
    logger.info('[POST] API Access "/"');
    res.send('create');
  })
  .put(function (req, res) {
    logger.info('[PUT] API Access "/"');
    res.send('update');
  })
  .delete(function (req, res) {
    logger.info('[DELETE] API Access "/"');
    res.send('delete');
  });

export default rootRouter;
