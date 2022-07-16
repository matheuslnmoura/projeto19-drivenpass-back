import { Request, Response } from 'express';

import { getCredentialsService, postcredentialService } from '../services/credentialsService.js';

export async function postCredential(req: Request, res: Response) {
  const user = res.locals.user;
  const credentialsInfo = req.body;
  await postcredentialService(credentialsInfo, user);
  res.sendStatus(200);
}

export async function getCredentials(req: Request, res: Response) {
  const user = res.locals.user;
  const credentials = await getCredentialsService(user.id);
  res.status(200).send(credentials);
}

export async function getCredentialById(req:Request, res: Response) {
  const user = res.locals.user;
  const {id: credentialId} = req.params;
  console.log(user);
  console.log(credentialId);
}