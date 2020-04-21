import winston from 'winston';

// Logger configuration
const logConfiguration = {
  transports: [
    new winston.transports.Console(),
  ],
};

// Create the logger
const logger = winston.createLogger(logConfiguration);

export default logger;
