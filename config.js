'use strict';

const path = require('path');
const dotenv = require('dotenv');

// Load configuration
try {
  let envPath;
  switch (process.env.NODE_ENV) {
    case 'development': {
      envPath = path.resolve('.env.dev');
      break;
    }
    case 'test': {
      envPath = path.resolve('.env.test');
      break;
    }
    case 'production': {
      envPath = path.resolve('.env');
      break;
    }
    default: {
      envPath = null;
    }
  }

  // Check if path is assigned
  if (envPath) {
    const result = dotenv.config({
        path: envPath,
    });

    // Check for errors loading .env file
    if (result.error) {
      throw result.error;
    }
  } else {
    throw new Error('**ENVIRONMENT NOT DEFINED**')
  }
} catch (error) {
  console.error(error);
  process.exit(1);
}
