import { Request, Response } from 'express';
import { createWifiService } from '../services/wifiService.js';

export async function createWifiController(req: Request, res: Response) {
  const {id: userId} = res.locals.user;
  const wifiInfo = req.body;
  const createdWifi = await createWifiService(wifiInfo, userId);
  if(!createdWifi) {
    throw { code: 500, message: 'Could not create wifi. Please try again'};
  }
  res.status(201).send(createdWifi);
}