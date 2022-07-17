import { Router } from 'express';

import userRouter from './userRouter.js';
import credentialsRouter from './credentialsRouter.js';
import notesRouter from './notesRouter.js';
import cardsRouter from './cardsRouter.js';


const router = Router();

router.use(userRouter);
router.use(credentialsRouter);
router.use(notesRouter);
router.use(cardsRouter);

export default router;