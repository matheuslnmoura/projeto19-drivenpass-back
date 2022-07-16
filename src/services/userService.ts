
import { createUser } from '../repositories/userRepository.js';
import { checkEmailOnDatabase, createPasswordHash, createToken, validatePassword } from '../utils/userUtils.js';

export type userData = {
  id: number;
  email: string;
  password: string
}

export async function signUpService(email: string, password: string) {
  const user = await checkEmailOnDatabase(email);
  if(user) {
    throw {code: 409, message: 'Email already registred. Please login instead'};
  }

  const hashPassword = await createPasswordHash(password);

  const result = await createUser(email, hashPassword);

  if(!result) {
    throw{code: 500, message: 'Could not register. Please try again later'};
  }
  return;
}

export async function signInService(email: string, password: string) {
  const user = await checkEmailOnDatabase(email);
  if(!user) {
    throw {code: 404, message: 'Email not found. Please sign up instead'};
  }

  const{id, password : hashPassword} = user;
  const isPasswordValid = await validatePassword(password, hashPassword);
  if(!isPasswordValid) {
    throw{ code: 401, message: 'Incorrect Password'};
  }
  
  const token = await createToken(id);
  if(!token) {
    throw{ code: 500, type: 'create_token_error', message: 'Something went wrong. Try again'};
  }

  return token;

}

