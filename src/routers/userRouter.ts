import { Router } from 'express';

import { signInController, signUpController } from '../controllers/userController.js';
import { validateUserInfo } from '../middlewares/userValidations.js';

const userRouter = Router();

userRouter.post('/sign-up', validateUserInfo, signUpController);
userRouter.post('/sign-in', validateUserInfo, signInController);

export default userRouter;

