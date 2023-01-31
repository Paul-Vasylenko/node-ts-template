import { HttpStatuses } from './ApiError';
import { COMMON, CommonErrorTypes } from './common';

export const Errors = {
  COMMON: {
    types: CommonErrorTypes,
    mappers: COMMON,
  },
};

type MappedError = {
  code: string;
  status: HttpStatuses;
  message: string;
  payload?: unknown;
};

export type ErrorMapper = (payload?: unknown) => MappedError;
export { HttpStatuses, dumpError } from './ApiError';
export { default as ApiError } from './ApiError';
