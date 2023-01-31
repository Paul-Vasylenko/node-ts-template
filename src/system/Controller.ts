import { type NextFunction, type Response } from 'express';
import { HttpStatuses, logger } from 'utils';

export default class Controller {
  protected sendError(next: NextFunction, error: unknown) {
    next(error);
  }

  protected sendData(res: Response, data: unknown = null, status = HttpStatuses.OK) {
    if (!data) {
      logger.error('Data not provided', data);
      res.status(status).end();
      return;
    }

    logger.notice('Service send response', { data });
    res.status(status).json({ data }).end();
  }
}
