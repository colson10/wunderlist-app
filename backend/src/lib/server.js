'use strict';

import express from 'express';
import wunderlistRouter from '../routes/wunderlist-login';

const app = express();

app.use(wunderlistRouter);

const startServer = () => {
  app.listen(process.env.PORT, () => {
    console.log('__SERVER_UP__', process.env.PORT)});
};

export default startServer;