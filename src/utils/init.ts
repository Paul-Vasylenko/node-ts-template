import compression from 'compression';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import express, { type Router } from 'express';

const initApp = (...routers: Router[]) => {
  const app = express();

  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(cookieParser());
  app.use(compression());

  routers.forEach((router) => app.use(router));

  return app;
};

export default initApp;
