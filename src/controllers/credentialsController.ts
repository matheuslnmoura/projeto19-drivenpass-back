import { Request, Response } from 'express';

import { credentialServices } from '../services/credentialsService.js';

export async function postCredential(req: Request, res: Response) {
  const user = res.locals.user;
  const credentialsInfo = req.body;
  await credentialServices(credentialsInfo, user);
  res.sendStatus(200);
}