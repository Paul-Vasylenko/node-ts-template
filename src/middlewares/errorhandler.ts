import { type NextFunction, type Request, type Response } from 'express';
import { ApiError, dumpError, Errors, HttpStatuses } from 'utils';
import { ValidationError } from 'yup';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export default (error: Error, req: Request, res: Response, next: NextFunction) => {
  let mappedError = new ApiError();

  if (error instanceof ApiError) {
    mappedError = error;
  }
  if (error instanceof ValidationError) {
    mappedError = new ApiError(Errors.COMMON.types.INVALID_REQUEST, HttpStatuses.INVALID_REQUEST, error.errors[0]);
  }

  res.status(mappedError.status).json({
    error: dumpError(mappedError),
  });
};
