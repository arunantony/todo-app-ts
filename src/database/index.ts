import mongoose from 'mongoose';
import config from '../config';
import { TasksModel } from './schemas/tasks';

import logger from '../utils/logger';

mongoose.set('useFindAndModify', false);

const { db: dbConfig } = config;

// Connect to the database
// construct the database URI and encode username and password.
const dbURI = `mongodb://${dbConfig.host}:${dbConfig.port}`;

const dbOptions = {
  user: encodeURIComponent(dbConfig.username),
  pass: encodeURIComponent(dbConfig.password),
  dbName: dbConfig.database,
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

mongoose.connect(dbURI, dbOptions)
  .catch((err) => {
    logger.error(err.message);
  });

// Throw an error if the connection fails
mongoose.connection.on('error', (err) => {
  // if(err) throw err;
  // throw err;
  logger.error(err.message);
});

// mpromise (mongoose's default promise library) is deprecated,
// Plug-in your own promise library instead.
// Use native promises
mongoose.Promise = global.Promise;

export default {
  mongoose,
  models: {
    TasksModel,
  },
};
