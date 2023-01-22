import { type ReadStream } from 'fs';

export enum FS {
  LOCAL = 'local',
  S3 = 's3',
}

export interface Stats {
  name: string;
  size: number;
  owner: number;
  createdAt: number;
  updatedAt: number;
}

export interface FileSystemOperator {
  location: string;

  // get relative path
  relative(way: string): string;

  // create folder if not exists
  init(folder: string): Promise<void>;

  // check if path exists
  exists(file: string): Promise<boolean>;

  // copy file from to
  copy(source: string, target: string): Promise<void>;

  // remove file
  remove(file: string): Promise<void>;

  // move file from to
  move(source: string, target: string): Promise<void>;

  // read file and get ReadStream
  getStream(file: string): Promise<ReadStream>;

  // write content to a file
  write(file: string, content: string): Promise<void>;

  uploadFile(nativePath: string, remotePath: string): Promise<void>;

  list(folder: string): Promise<Stats[]>;
}
