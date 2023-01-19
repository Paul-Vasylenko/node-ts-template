import { Log, LogClass, setConfig } from 'class-logger';
import environment from 'environment';
import winston, { format, transports } from 'winston';

const fieldsOrderFormat = format((info) => {
  return Object.assign(
    {
      timestamp: info.timestamp,
    },
    info,
  );
});

const logger = winston.createLogger({
  level: environment.LOG_LEVEL,
  levels: {
    error: 0,
    warn: 1,
    info: 2,
    notice: 3,
    verbose: 4,
    debug: 5,
  },
  transports: [new transports.Console()],
  format: format.combine(
    format.colorize({
      colors: {
        info: 'blue',
        error: 'red',
      },
    }),
    format.timestamp(),
    format.prettyPrint(),
    format.errors(),
    format.splat(),
    format.simple(),
    fieldsOrderFormat(),
  ),
});

setConfig({
  log: logger.debug.bind(logger),
  logError: logger.error.bind(logger),
  include: {
    args: false,
  },
});

export default logger;
