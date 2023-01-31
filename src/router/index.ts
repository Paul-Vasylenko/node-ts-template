import { Router } from 'express';
import { exampleController } from 'features';

const router = Router();

router.get('/', exampleController.getExamples.bind(exampleController));

export default router;
