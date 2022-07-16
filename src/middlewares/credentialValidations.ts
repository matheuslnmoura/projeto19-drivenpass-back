import { Request, Response, NextFunction } from 'express';
import joi from 'joi';
import chalk from 'chalk';

import { credentialsType } from '../services/credentialsService.js';

export function validateCredentials(req: Request, res: Response, next: NextFunction) {
  const credentials = req.body;
  const credentialsSchema = joi.object<credentialsType>({
    title: joi.string().required(),
    url: joi.string().uri().required(),
    user: joi.string().required(),
    password: joi.string().required()
  });

  const { error } = credentialsSchema.validate(credentials, {abortEarly: false});

  if(error) {
    console.log(chalk.bold.red(error));
    throw{code: 422, message: error.message};
  }
  next();
}