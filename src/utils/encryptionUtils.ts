import Cryptr from 'cryptr';

const cryptr = new Cryptr('CRYPTR_SECRET_KEY');

export function encryptPassword(password: string) {
  return cryptr.encrypt(password);
}

export function decryptPassword(cryptedPassword: string) {
  return cryptr.decrypt(cryptedPassword);
}
