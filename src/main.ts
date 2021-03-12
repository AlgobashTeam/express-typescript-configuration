import express from 'express';
import bodyParser from 'body-parser';
import fs from 'fs';
import log4js from 'log4js';
import errorHandler from 'errorhandler';

import logConf from './config/logger';
import apiv1 from './routes/apiv1';

/**
 * Create log folder
 */
function createLogFolder() {
  try {
    fs.mkdirSync('./log');
  } catch (e) {
    if (e.code !== 'EEXIST') {
      process.exit(1);
    }
  }
}

function main() {
  // Configuration
  const port = 8080;

  // Logging
  log4js.configure(logConf);
  const log = log4js.getLogger('main');
  createLogFolder();

  // App init and global middlewares
  const app = express();
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(bodyParser.json());

  // Routing
  app.use('/api/v1', apiv1);
  app.get('/', (_, res) => {
    res.json({
      hello: 'world',
    });
  });

  if (process.env.NODE_ENV === 'development') {
    app.use(errorHandler());
  }

  app.listen(port, () => {
    log.info(`Running on :${port}`);
  });
}

main();
