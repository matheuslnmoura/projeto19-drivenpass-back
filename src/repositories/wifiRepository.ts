import db from '../config/database.js';
import { wifiData } from '../services/wifiService.js';

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