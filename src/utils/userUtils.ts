import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config();

import { findByEmail } from '../repositories/userRepository.js';

export async function checkEmailOnDatabase(email: string) {
  return await findByEmail(email);
}

export async function createPasswordHash(password: string) {
  const saltRounds = 12;
  return bcrypt.hashSync(password, saltRounds);
}

export async function validatePassword(password: string, hashPassword: string) {
  return bcrypt.compareSync(password, hashPassword);
}

export async function createToken(id: number) {
  return jwt.sign({id}, process.env.JWT_SECRET, {
    expiresIn: '12h'
  });
}