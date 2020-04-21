import express from 'express';
import logger from 'morgan';
import bodyParser from 'body-parser';
import config from './config';
import errorHandler from './utils/errorHandler';
/**
 * Routes
 */
import root from './routes/root';
import api from './routes/api';

const { notFoundHandler, defaultErrorHandler } = errorHandler;
const { server: expressConfig, logger: loggerConfig } = config;

/**
 * Create Express server.
 */
const app = express();

/**
 * Express configuration.
 */
app.set('host', expressConfig.server);
app.set('port', expressConfig.port);

app.use(logger(loggerConfig.level));

// parse application/json
app.use(bodyParser.json());

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// Add APIs
app.use('/', root);
app.use('/api', api);

// Mount 404 handler as penultimate middleware
app.use(notFoundHandler);

// Mount catch-all error handler
app.use(defaultErrorHandler);

// Export express instance
export default app;
