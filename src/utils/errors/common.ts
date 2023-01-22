import { ErrorMapper } from '.';
import { HttpStatuses } from './ApiError';

type CommonErrorTypes = 'INTERNAL_SERVER_ERROR' | 'INVALID_REQUEST';

const COMMON: Record<CommonErrorTypes, ErrorMapper> = {
  INTERNAL_SERVER_ERROR: () => ({
    code: 'INTERNAL_SERVER_ERROR',
    status: HttpStatuses.INTERNAL,
    message: '',
  }),
  INVALID_REQUEST: () => ({
    code: 'INVALID_REQUEST',
    status: HttpStatuses.INVALID_REQUEST,
    message: '',
  }),
};

export default COMMON;
