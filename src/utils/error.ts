export default class ApiError extends Error {
  constructor(
    public code: string = CommonErrors.INTERNAL_SERVER_ERROR,
    public status = HttpStatuses.INTERNAL,
    message = 'Internal server error',
    public payload?: unknown,
  ) {
    super(message);
  }
}

export enum CommonErrors {
  INTERNAL_SERVER_ERROR = 'INTERNAL_SERVER_ERROR',
  INVALID_REQUEST = 'INVALID_REQUEST',
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
