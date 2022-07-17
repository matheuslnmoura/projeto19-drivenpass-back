import {Request, Response, NextFunction} from 'express';
import joi from 'joi';
import chalk from 'chalk';

export function validateCardInfo(req: Request, res: Response, next: NextFunction) {
  const cardInfo = req.body;
  const cardInfoSchema = joi.object({
    title: joi.string().required(),
    cardNumber: joi.string().required(),
    cardholderName: joi.string().required(),
    securityCode: joi.string().length(3).pattern(/^[0-9]+$/).required(),
    expirationDate: joi.string().pattern(/^(0[1-9]|1[0-2])\/?([0-9]{2})$/).required(),
    password: joi.string().required(),
    isVirtual: joi.bool().required(),
    type: joi.string().valid('credit', 'debit', 'credit and debit').required()
  });

  const {error} = cardInfoSchema.validate(cardInfo, {abortEarly: false});

  if(error) {
    console.log(chalk.bold.red(error));
    throw { code: 422, message: error.message};
  }

  next();
}