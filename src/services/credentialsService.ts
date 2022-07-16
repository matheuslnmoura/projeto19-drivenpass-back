
import { getCredentialsByTitleAndUserId, insertCredential} from '../repositories/credentialsRepository.js';
import { decryptPassword, encryptPassword } from '../utils/encryptionUtils.js';
import { userData } from './userService.js';

export type credentialsType =  {
  title: string 
  url: string
  user: string
  password: string
}

export async function credentialServices(credentialsInfo: credentialsType, userInfo: userData) {
  const { title, password } = credentialsInfo;
  const {id: userId} = userInfo;

  await checkIfTitleUnique(title, userId);

  const cryptedPassword = encryptPassword(password);

  const credentialInfoData: credentialsType = {
    ...credentialsInfo,
    password: cryptedPassword
  };

  const result = await insertCredential(credentialInfoData, userId);

  if(!result) {
    throw { code: 500, message:'Could not register this credential. Please try again'};
  }

  return;

}


async function checkIfTitleUnique(title: string, userId: number) {
  const result = await getCredentialsByTitleAndUserId(title, userId);
  if(result.length !== 0) {
    throw {code: 401, message: 'Credential title should be unique. Choose a different title'};
  }
  return;
}