import { Request, Response } from 'express';

export function testApp(req: Request, res: Response){
  res.status(200).send('Router is working');
}