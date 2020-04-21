import { Request, Response, NextFunction } from 'express';
import logger from '../logger';

const notFoundHandler = (req: Request, res: Response) => {
  logger.warn(
    'Unhandled resource',
    {
      statusCode: 404,
      error: 'Unknown resource',
      resource: req.originalUrl,
    },
  );

  return res
    .status(404)
    .send(`${req.originalUrl} not found on this server.`);
};

// eslint-disable-next-line no-unused-vars
const defaultErrorHandler = (err: Error, req: Request, res: Response, next: NextFunction) => {
  logger.error('Uncaught error', { statusCode: 500, err });

  return res
    .status(500)
    .send(err);
};

export default {
  notFoundHandler,
  defaultErrorHandler,
};
