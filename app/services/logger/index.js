'use strict';

const winston = require('winston');
require('winston-daily-rotate-file');
const path = require('path');

const logger = winston.createLogger({
  transports: [
    new winston.transports.DailyRotateFile({
      filename: '%DATE%.log',
      dirname: path.resolve('logs'),
      datePattern: 'YYYY-MM-DD',
      maxFiles: '120d',
      maxSize: '20m',
    }),
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
