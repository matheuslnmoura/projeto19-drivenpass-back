import { Request, Response, NextFunction } from 'express';
import joi from 'joi';
import chalk from 'chalk';

export function validateWifiInfo(req: Request, res: Response, next: NextFunction) {
  const wifiInfo = req.body;
  const wifiInfoSchema = joi.object({
    title: joi.string().required(),
    name: joi.string().required(),
    password: joi.string().required()
  });

  const {error} = wifiInfoSchema.validate(wifiInfo, {abortEarly: false});

  if(error) {
    console.log(chalk.bold.red(error));
    throw { code: 422, message: error.message};
  }

  next();
}