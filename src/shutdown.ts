import logger from './utils/logger';

['SIGINT', 'SIGTERM', 'SIGQUIT', 'SIGHUP'].forEach((sig) => {
  process.on(sig, async () => {
    logger.info(`${sig} signal catched`);
    await shutdown();
  });
});

process.on('exit', (code) => {
  logger.info(`exit ${code} event catched`);
});

process.on('unhandledRejection', (error) => {
  console.error(error);

  logger.error({
    type: 'UnhandledRejection',
    // @ts-ignore
    error: error.stack,
  });
});

process.on('uncaughtException', (error) => {
  console.error(error);

  logger.error({
    type: 'UncaughtException',
    error: error.stack,
  });
});

let isShuttingDown = false;

async function shutdown(code = 0) {
  if (isShuttingDown) return;
  isShuttingDown = true;
  setTimeout(() => process.exit(2), 30000); // error if not exited in 30 seconds

  logger.info(`Exit with code ${code}`);
  process.exit(code);
}
