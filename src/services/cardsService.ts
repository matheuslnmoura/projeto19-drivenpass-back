import { getCardByTitleAndUserId, insertCard } from '../repositories/cardRepository.js';
import { encryptPassword } from '../utils/encryptionUtils.js';

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