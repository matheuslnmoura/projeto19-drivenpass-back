import { Request, Response } from 'express';
import { signInService, signUpService } from '../services/userService.js';

export async function signUpController(req: Request, res: Response){
  const {email, password} = req.body;
  await signUpService(email, password);

  res.sendStatus(201);
}

export async function signInController(req: Request, res: Response) {
  const {email, password} = req.body;
  const token = await signInService(email, password);
  res.status(200).send({token});
}