import log4js from 'log4js';

// logger set up
const log_level_candidate: string[] = process.argv
  .slice(2)
  .filter((opt) => opt.match(/^LOG_LEVEL=(debug|info|error|fatal){1}$/i));
const log_level_candidate_first: string = log_level_candidate[0] || '';

// priority: argument > environment variable > default
const log_level: string =
  '' !== log_level_candidate_first
    ? String(log_level_candidate_first.match(/debug|info|error|fatal/))
    : process.env.LOG_LEVEL || 'info';

interface loggerConfig {
  appenders: {
    consoleLog: {
      type: string,
    },
  },
  categories: {
    default: {
      appenders: string[],
      level: string,
    },
  },
}

const config: loggerConfig = {
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

export { logger, log_level };
