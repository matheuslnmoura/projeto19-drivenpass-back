import {Request, Response} from 'express';
import { createCardService, deleteCardByIdService, getCardByIdService, getCardsService } from '../services/cardsService.js';

export async function createCardController(req: Request, res: Response) {
  const {id: userId} = res.locals.user;
  const cardInfo = req.body;
  const createdCard = await createCardService(cardInfo, userId);
  if(!createdCard) {
    throw{ code: 500, message: 'Could not insert card info. Please try again'};
  }
  res.status(201).send(createdCard);
}

export async function getCardsController(req: Request, res: Response) {
  const {id: userId} = res.locals.user;
  const cards = await getCardsService(userId);
  if(!cards) {
    throw { code: 500, mesage: 'Could not retrieve cards. Please try again'};
  }
  res.status(200).send(cards);
}

export async function getCardByIdController(req: Request, res: Response) {
  const {id: userId} = res.locals.user;
  const {id: cardId} = req.params;
  const card = await getCardByIdService(cardId, userId);
  if(!card) {
    throw {code: 500, message: 'Could not retrieve card. Please try again'};
  }
  res.status(200).send(card);
}

export async function deleteCardById( req: Request, res: Response ) {
  const {id: userId} = res.locals.user;
  const {id: cardId} = req.params;
  const deletedCard = await deleteCardByIdService(cardId, userId);
  if(!deletedCard) {
    throw {code: 500, message: 'Could not retrieve card. Please try again'};
  }
  res.status(200).send(deletedCard);
}