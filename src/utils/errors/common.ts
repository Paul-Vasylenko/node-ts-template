import { ErrorMapper } from '.';
import { HttpStatuses } from './ApiError';

export const CommonErrorTypes = {
  INTERNAL_SERVER_ERROR: 'INTERNAL_SERVER_ERROR',
  INVALID_REQUEST: 'INVALID_REQUEST',
};

export const COMMON: Record<string, ErrorMapper> = {
  [CommonErrorTypes.INTERNAL_SERVER_ERROR]: () => ({
    code: 'INTERNAL_SERVER_ERROR',
    status: HttpStatuses.INTERNAL,
    message: '',
  }),
  [CommonErrorTypes.INVALID_REQUEST]: () => ({
    code: 'INVALID_REQUEST',
    status: HttpStatuses.INVALID_REQUEST,
    message: '',
  }),
};
