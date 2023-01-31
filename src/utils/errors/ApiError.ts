export default class ApiError extends Error {
  constructor(
    public code: string = 'INTERNAL_SERVER_ERROR',
    public status = HttpStatuses.INTERNAL,
    message = 'Internal server error',
    public payload?: unknown,
  ) {
    super(message);
  }
}

export enum HttpStatuses {
  OK = 200,
  CREATED = 201,
  INVALID_REQUEST = 400,
  UNAUTHORIZED = 401,
  FORBIDDEN = 403,
  NOT_FOUND = 404,
  INTERNAL = 500,
}

export function dumpError(error: ApiError) {
  return {
    code: error.code,
    message: error.message,
    payload: error.payload,
    status: 0,
  };
}
