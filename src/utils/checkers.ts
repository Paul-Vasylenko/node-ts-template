import { Stream } from 'stream';

export function isFunction(x: unknown): x is Function {
  return !!x && ['[object Function]', '[object AsyncFunction]'].includes(Object.prototype.toString.call(x));
}

export function isStream(x: unknown): x is Stream {
  // @ts-ignore
  return x && isFunction(x.pipe);
}
