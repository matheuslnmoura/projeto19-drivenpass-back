import db from '../config/database.js';
import { wifiData } from '../services/wifiService.js';

export async function getWifisByUserId(userId: number) {
  return await db.wifis.findMany({
    where: {
      userId
    }
  });
}

export async function getWifiByIdAndUserId(wifiId: number, userId: number) {
  return await db.wifis.findFirst({
    where: {
      id: wifiId,
      userId
    }
  });
}

export async function insertWifi(wifiInfo: wifiData, userId: number) {
  const { title, name, password} = wifiInfo;
  return await db.wifis.create({
    data: {
      title, 
      name, 
      password, 
      userId
    }
  });
}