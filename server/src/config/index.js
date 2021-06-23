const logger = require('./logger.config');

require('dotenv').config();

const { DB_URI, PORT } = process.env;

const api = {
  port: PORT || 8081,
  dbUri: DB_URI,
}


module.exports = { logger, api };