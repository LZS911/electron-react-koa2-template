import Koa = require('koa');
import { createConnection } from 'typeorm';
import { HOST, PORT } from './data/constant';
import {
  initRouters,
  initSession,
  initCors,
  initSwaggerUI,
  formatErrorInfo,
  initLogger,
} from './init';
import 'reflect-metadata';
import { logger } from './logger';

createConnection()
  .then(() => {
    const app = new Koa();
    initLogger(app);
    formatErrorInfo(app);
    initCors(app);
    initSession(app);
    initRouters(app);
    initSwaggerUI(app);

    app.listen(PORT, HOST, () =>
      logger.info(`API server listening on ${HOST}:${PORT}`)
    );
  })
  .catch((err: string) => {
    logger.error('TypeORM connection error:', err);
  });
