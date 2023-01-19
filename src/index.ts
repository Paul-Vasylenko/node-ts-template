import 'reflect-metadata';
import express from 'express';
import compression from 'compression';

import environment from 'environment';
import router from 'router';
import './shutdown';

const app = express();

app.use(compression());
app.use(router);

app.listen(environment.PORT, () => {
  console.log(`Server started on port ${environment.PORT}`);
});
