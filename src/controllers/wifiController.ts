import { Request, Response } from 'express';
import { createWifiService, getWifisService } from '../services/wifiService.js';

export async function createWifiController(req: Request, res: Response) {
  const {id: userId} = res.locals.user;
  const wifiInfo = req.body;
  const createdWifi = await createWifiService(wifiInfo, userId);
  if(!createdWifi) {
    throw { code: 500, message: 'Could not create wifi. Please try again'};
  }
  res.status(201).send(createdWifi);
}

export async function getWifisController(req: Request, res: Response) {
  const {id: userId} = res.locals.user;
  const wifis = await getWifisService(userId);
  if(wifis.length === 0) {
    throw {code: 500, message: 'Could not retrieve wifis. Please try again'};
  }
  res.status(200).send(wifis);
}