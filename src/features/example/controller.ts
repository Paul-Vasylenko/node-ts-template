import { type NextFunction, type Request, type Response } from 'express';
import exampleSchema from './schema';
import exampleService from './service';
import { Controller } from 'system';

class ExampleController extends Controller {
  public async getExamples(req: Request, res: Response, next: NextFunction) {
    try {
      const validationData = req.query;
      const data = await exampleSchema.validate(validationData);

      const entities = await exampleService.exampleEntities();

      this.sendData(res, { ...data, entities });
    } catch (e: unknown) {
      this.sendError(next, e);
    }
  }
}

export default new ExampleController();
