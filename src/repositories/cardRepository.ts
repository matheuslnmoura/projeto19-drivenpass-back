import db from '../config/database.js';

import { cardData } from '../services/cardsService.js';

export async function getCardByTitleAndUserId(title: string, userId: number) {
  return await db.cards.findFirst({
    where:{
      title, 
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