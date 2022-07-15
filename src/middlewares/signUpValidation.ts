import joi from 'joi';
import  { Request, Response, NextFunction}  from 'express';
import chalk from 'chalk';

export function validateSignUpInfo(req: Request, res: Response, next: NextFunction) {
  const signUpInfo = req.body;
  const signUpInfoSchema = joi.object({
    email: joi.string().email().required(),
    password: joi.string().min(10).required()
  });

  const { error } = signUpInfoSchema.validate(signUpInfo, {abortEarly: false});

  if(error) {
    console.log(chalk.bold.red(error));
    return res.sendStatus(422);
  }

  next();
}