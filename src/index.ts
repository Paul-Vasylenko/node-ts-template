import 'reflect-metadata';

import logger from './utils/logger'; // configure logger
import environment from 'environment';
import router from 'router';
import './shutdown';
import { initApp } from 'utils';

const app = initApp(router);

app.listen(environment.PORT, () => {
  logger.info(`Server started on port ${environment.PORT}`);
});
