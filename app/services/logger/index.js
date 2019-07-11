'use strict';

const winston = require('winston');
const path = require('path');

const currentDate = new Date();
const filename = `${currentDate.toISOString()}.log`;

const logPath = path.resolve('logs', filename);

const logger = winston.createLogger({
  transports: [
    new winston.transports.File({ filename: logPath })
  ],
});

module.exports = logger;
