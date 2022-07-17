import { insertWifi } from '../repositories/wifiRepository.js';
import { encryptPassword } from '../utils/encryptionUtils.js';


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