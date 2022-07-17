import { Cards } from '@prisma/client';
import { getCardByIdAndUserId, getCardByTitleAndUserId, getCardsByUserId, insertCard } from '../repositories/cardRepository.js';
import { decryptPassword, encryptPassword } from '../utils/encryptionUtils.js';

export type cardData = {
  title: string;
  cardNumber: string;
  cardholderName: string;
  securityCode: string;
  expirationDate: string;
  password: string;
  isVirtual: boolean;
  type: string
}

export async function createCardService(cardInfo: cardData, userId: number) {
  const {title, password, securityCode} = cardInfo;
  await checkIfCardTitleUnique(title, userId);
  const cryptedPassword = encryptPassword(password);
  const cryptedSecurityCode = encryptPassword(securityCode);
  const insertCardInfo = {
    ...cardInfo,
    password: cryptedPassword,
    securityCode: cryptedSecurityCode
  };
  const createdCard = await insertCard(insertCardInfo, userId);
  return createdCard;
}

async function checkIfCardTitleUnique(title: string, userId: number) {
  const result = await getCardByTitleAndUserId(title, userId);
  if(result) {
    throw {code: 401, message: 'Card title should be unique. Choose a different title'};
  }
  return;
}

export async function getCardsService(userId: number) {
  const encryptedCards = await getCardsByUserId(userId);
  const decryptedInfos = decryptInfos(encryptedCards);
  return decryptedInfos;
}

export async function getCardByIdService(cardIdString: string, userId: number) {
  const cardId = parseInt(cardIdString);
  const encryptedCard = await checkIfCardIsFromUser(cardId, userId);
  const {password, securityCode} = encryptedCard;
  const decryptedPassword = decryptPassword(password);
  const decryptedSecurityCode = decryptPassword(securityCode);
  const decryptedCard = {
    ...encryptedCard,
    password: decryptedPassword,
    securityCode: decryptedSecurityCode
  };
  return decryptedCard;
}

async function checkIfCardIsFromUser(cardId: number, userId: number) {
  const card = await getCardByIdAndUserId(cardId, userId);
  if(!card) {
    throw { code: 404, message: 'Card not found'};
  }
  return card;
}

function decryptInfos(encryptedCards: Cards[]) {
  return encryptedCards.map(encryptedCard => {
    const{password, securityCode} = encryptedCard;
    const decryptedPassword = decryptPassword(password);
    const decryptedSecurityCode = decryptPassword(securityCode);
    const decryptedCard = {
      ...encryptedCard,
      password: decryptedPassword,
      securityCode: decryptedSecurityCode

    };

    return decryptedCard;
  });
}