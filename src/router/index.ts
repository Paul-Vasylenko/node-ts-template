import { exampleController } from 'controllers';
import { Router } from 'express';

const router = Router();

router.get('/', exampleController.getExamples.bind(exampleController));

export default router;
