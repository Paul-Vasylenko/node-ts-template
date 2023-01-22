import { config } from 'dotenv';
import * as envalid from 'envalid';
import { FS } from 'utils/filesystem/types';
config();

const environment = envalid.cleanEnv(process.env, {
  PORT: envalid.num(),
  LOG_LEVEL: envalid.str(),
  FS: envalid.str({ choices: [FS.LOCAL, FS.S3] }),
  FS_FOLDER: envalid.str()
});

export default environment;
