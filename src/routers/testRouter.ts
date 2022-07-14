import { Router } from 'express';

import { testApp } from '../controllers/testController.js';

const testRouter = Router();

testRouter.get('/test', testApp);

export default testRouter;

