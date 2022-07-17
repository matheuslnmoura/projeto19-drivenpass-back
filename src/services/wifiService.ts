import { Wifis } from '@prisma/client';
import { getWifisByUserId, insertWifi } from '../repositories/wifiRepository.js';
import { decryptPassword, encryptPassword } from '../utils/encryptionUtils.js';


export type wifiData = {
  title: string
  name: string, 
  password: string
}

export async function createWifiService(wifiInfo: wifiData, userId: number) {
  const {password} = wifiInfo;
  const cryptedPassword = encryptPassword(password);
  const cryptedWifiInfo = {
    ...wifiInfo, 
    password: cryptedPassword
  };
  const createdWifi = await insertWifi(cryptedWifiInfo, userId);
  return createdWifi; 
}

export async function getWifisService(userId: number) {
  const encryptedWifis = await getWifisByUserId(userId);
  const decryptedWifis = decryptWifis(encryptedWifis);
  return decryptedWifis;
}

function decryptWifis(encryptedWifis: Wifis[]) {
  return encryptedWifis.map(encryptedWifi =>{
    const {password} = encryptedWifi;
    const decryptedPassword = decryptPassword(password);
    const decryptedWifi = {
      ...encryptedWifi, 
      password: decryptedPassword
    };
    return decryptedWifi;
  });
}