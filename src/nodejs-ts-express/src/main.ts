import os from 'os';
import app from './router/app';
import port from './lib/port';
import { logger, log_level } from './lib/logger';

// security configuration
app.disable('x-powered-by');

app.listen(port, () => {
  logger.info(
    `${
      process.env.npm_package_name
    } listening at PORT@${port}, HOSTNAME@${os.hostname()}, SOURCE@${__filename}, loglevel@${log_level}.`
  );
});
