import { HttpStatuses } from './ApiError';
import COMMON from './common';

export const Errors = {
  COMMON,
};

type MappedError = {
  code: string;
  status: HttpStatuses;
  message: string;
  payload?: unknown;
};

export type ErrorMapper = (payload?: unknown) => MappedError;
