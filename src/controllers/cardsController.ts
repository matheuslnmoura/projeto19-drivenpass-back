import {Request, Response} from 'express';
import { createCardService } from '../services/cardsService.js';

export async function createCardController(req: Request, res: Response) {
  const {id: userId} = res.locals.user;
  const cardInfo = req.body;
  const createdCard = await createCardService(cardInfo, userId);
  if(!createdCard) {
    throw{ code: 500, message: 'Could not insert card info. Please try again'};
  }
  res.status(201).send(createdCard);
}