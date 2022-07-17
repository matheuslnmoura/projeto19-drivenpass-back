import db from '../config/database.js';

import { cardData } from '../services/cardsService.js';

export async function getCardsByUserId(userId: number) {
  return await db.cards.findMany({
    where: {userId}
  });
}

export async function getCardByTitleAndUserId(title: string, userId: number) {
  return await db.cards.findFirst({
    where:{
      title, 
      userId
    }
  });
}

export async function getCardByIdAndUserId(cardId: number, userId: number) {
  return await db.cards.findFirst({
    where:{
      id: cardId,
      userId
    }
  });
}

export async function insertCard(cardInfo: cardData, userId: number) {
  const { title, cardNumber, cardholderName, securityCode, expirationDate, password, isVirtual, type} = cardInfo;
  return await db.cards.create({
    data: {
      title,
      cardNumber,
      cardholderName,
      securityCode,
      expirationDate,
      password,
      isVirtual,
      type,
      userId
    }
  });
}

export async function deleteCardById(cardId: number) {
  return await db.cards.delete({
    where:{id: cardId}
  });
}