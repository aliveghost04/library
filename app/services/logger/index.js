'use strict';

const winston = require('winston');
const path = require('path');

const currentDate = new Date();
const filename = `${currentDate.toISOString()}.log`;

const logPath = path.resolve('logs', filename);

const logger = winston.createLogger({
  transports: [
    new winston.transports.File({ filename: logPath }),
  ],
  format: winston.format.combine(
    winston.format.errors({ stack: true }),
    winston.format.timestamp(),
    winston.format.json(),
  ),
});

if (process.env.NODE_ENV !== 'production') {
  logger.add(new winston.transports.Console());
}

module.exports = logger;
