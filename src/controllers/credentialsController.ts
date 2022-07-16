import { Request, Response } from 'express';

import { deleteCredentialByIdService, getCredentialByIdService, getCredentialsService, postcredentialService } from '../services/credentialsService.js';

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
  const {id: userId} = user;
  const {id: credentialId} = req.params;
  const credential = await getCredentialByIdService(credentialId, userId);
  res.status(200).send(credential);
}

export async function deleteCredentialById(req: Request, res: Response) {
  const user = res.locals.user;
  const {id: userId} = user;
  const {id: credentialId} = req.params;
  const credentialTitle = await deleteCredentialByIdService(credentialId, userId);
  res.status(200).send(`Credential "${credentialTitle}" deleted succesfully`);
}