import { Log, LogClass } from 'class-logger';
import fs from 'fs-extra';
import path from 'path';
import { Stream } from 'stream';
import { isStream } from 'utils/checkers';

@LogClass()
class FileSystem {
  private location: string;

  constructor({ folder = './tmp' } = {}) {
    this.location = folder;
  }

  private relative(way: string) {
    return path.resolve(this.location, way);
  }

  @Log()
  public async init(folder: string) {
    this.location = folder;
    await fs.ensureDir(folder);
  }

  @Log()
  public async exists(file: string) {
    const result = await fs.exists(this.relative(file));

    return result;
  }

  @Log()
  public async copy(source: string, target: string) {
    await fs.copy(this.relative(source), this.relative(target));
  }

  @Log()
  public async remove(file: string) {
    await fs.remove(this.relative(file));
  }

  @Log()
  public async move(source: string, target: string) {
    await fs.move(source, target);
  }

  @Log()
  public async getStream(file: string) {
    // async interface for general purpose
    const stream = fs.createReadStream(this.relative(file));

    return stream;
  }

  @Log()
  public async write(file: string, content: string) {
    const filePath = this.relative(file);

    await fs.ensureDir(path.dirname(filePath));
    await (isStream(content) ? this.writeStream(filePath, content) : fs.writeFile(filePath, content));
  }

  private async writeStream(file: string, rstream: Stream) {
    const filePath = this.relative(file);

    await fs.ensureDir(path.dirname(filePath)); // compartibility with s3

    const wstream = fs.createWriteStream(filePath);

    await new Promise((res, rej) => {
      wstream.on('error', rej);
      wstream.on('close', res);
      rstream.pipe(wstream);
    });
  }

  @Log()
  public async uploadFile(nativePath: string, remotePath: string) {
    const rel = this.relative(remotePath);

    await fs.ensureDir(path.dirname(rel));
    await fs.move(nativePath, rel);
  }

  @Log()
  public async list(folder: string) {
    const normalized = this.relative(folder);
    const names = await fs.readdir(normalized);

    return Promise.all(
      names.map(async (name) => {
        const file = path.join(normalized, name);
        const stats = await fs.stat(file);

        return {
          name: file,
          size: stats.size,
          owner: stats.uid,
          createdAt: stats.birthtimeMs,
          updatedAt: stats.ctimeMs,
        };
      }),
    );
  }
}
