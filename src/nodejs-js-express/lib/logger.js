'use strict';

const log4js = require('log4js');

// logger set up
const log_level_candidate = process.argv
  .slice(2)
  .filter((opt) => opt.match(/^LOG_LEVEL=(debug|info|error|fatal){1}$/i));
const log_level_candidate_first = log_level_candidate[0] || '';

// priority: argument > environment variable > default
const log_level =
  '' !== log_level_candidate_first
    ? String(log_level_candidate[0].match(/debug|info|error|fatal/))
    : process.env.LOG_LEVEL || 'info';

const config = {
  appenders: {
    consoleLog: {
      type: 'console',
    },
  },
  categories: {
    default: {
      appenders: ['consoleLog'],
      level: log_level,
    },
  },
};

log4js.configure(config);
const logger = log4js.getLogger();

module.exports = { logger, log_level };
