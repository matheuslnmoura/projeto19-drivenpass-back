import { Request, Response } from 'express';

export function signUpController(req: Request, res: Response){
  res.status(200).send('Router is working');
}