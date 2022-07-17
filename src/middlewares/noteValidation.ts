import { Request, Response, NextFunction } from 'express';
import joi from 'joi';
import chalk from 'chalk';

export function validateNoteInfo(req: Request, res: Response, next: NextFunction) {
  const noteInfo = req.body;
  const noteInfoSchema = joi.object({
    title: joi.string().max(50).required(),
    note: joi.string().max(1000).required()
  });

  const {error} = noteInfoSchema.validate(noteInfo, {abortEarly: false});

  if(error) {
    console.log(chalk.bold.red(error));
    throw { code: 422, message: error.message};
  }

  next();
}