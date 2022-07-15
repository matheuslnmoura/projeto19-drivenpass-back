import { Router } from 'express';

import { signUpController } from '../controllers/testController.js';
import { validateSignUpInfo } from '../middlewares/signUpValidation.js';

const signUpRouter = Router();

signUpRouter.get('/test', validateSignUpInfo, signUpController);

export default signUpRouter;

