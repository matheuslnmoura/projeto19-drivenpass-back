import { Router } from 'express';
import { createCardController, getCardByIdController, getCardsController } from '../controllers/cardsController.js';
import { validateCardInfo } from '../middlewares/cardsValidation.js';
import verifyToken from '../middlewares/tokenValidation.js';

const cardsRouter = Router();

cardsRouter.post('/create-card', verifyToken, validateCardInfo, createCardController);
cardsRouter.get('/cards', verifyToken, getCardsController);
cardsRouter.get('/cards/:id', verifyToken, getCardByIdController);

export default cardsRouter;