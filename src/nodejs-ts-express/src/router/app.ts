import express from 'express';
import rootRouter from './root';
import sumRouter from './sum';

const app = express();

app.use('/', rootRouter);
app.use('/sum', sumRouter);

export default app;
