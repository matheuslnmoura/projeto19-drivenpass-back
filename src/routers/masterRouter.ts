import { Router } from 'express';

import testRouter from './signUpRouter.js';


const router = Router();

router.use(testRouter);

export default router;