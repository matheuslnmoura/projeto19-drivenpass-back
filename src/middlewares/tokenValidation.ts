import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

import { findById } from '../repositories/userRepository.js';
import { json } from 'express';

dotenv.config();

export default async function verifyToken(req, res, next) {
  const { authorization } = req.headers;

  if(!authorization){
    throw{code: 400, message: 'Missing Token'};
  }

  if(authorization.slice(0, 7) !== 'Bearer ') {
    throw {code: 401, message: 'Invalid authorization header'};
  }

  const token = authorization.split(' ')[1];

  interface JwtPayload {
    id: number
  }

  const decoded = jwt.verify(token, process.env.JWT_SECRET) as JwtPayload;
  const{ id } = decoded;

  const user = await findById(id);
  res.locals.user = user;
  next();
}