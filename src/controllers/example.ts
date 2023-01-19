import BaseController from 'controllers';
import { type NextFunction, type Request, type Response } from 'express';
import { exampleSchema } from 'schemas';
import { exampleService } from 'services';

class ExampleController extends BaseController {
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
