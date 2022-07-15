import {Request, Response, NextFunction} from 'express';

export type ErrorMiddleware = {
  code: number;
  type: string;
  message: string
}

export function errorHandlingMiddleware( error: ErrorMiddleware, req: Request, res: Response, next: NextFunction) {
  console.log(error);
  if(error.code) {
    return res.status(error.code).send(error.message);
  }
  return res.sendStatus(500);
}
