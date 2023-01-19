import { config } from 'dotenv';
import * as envalid from 'envalid';
config();

const environment = envalid.cleanEnv(process.env, {
  PORT: envalid.num(),
  LOG_LEVEL: envalid.str(),
});

export default environment;
