import { Router } from 'express';
import { createCardController } from '../controllers/cardsController.js';
import { validateCardInfo } from '../middlewares/cardsValidation.js';
import verifyToken from '../middlewares/tokenValidation.js';

const cardsRouter = Router();

cardsRouter.post('/create-card', verifyToken, validateCardInfo, createCardController);

export default cardsRouter;