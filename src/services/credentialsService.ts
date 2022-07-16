
import { Credentials } from '@prisma/client';
import { getCredentialByIdAndUserId, getCredentialsByTitleAndUserId, getUserCredentials, insertCredential} from '../repositories/credentialsRepository.js';
import { decryptPassword, encryptPassword } from '../utils/encryptionUtils.js';
import { userData } from './userService.js';

export type credentialsType =  {
  title: string 
  url: string
  user: string
  password: string
}


export async function postcredentialService(credentialsInfo: credentialsType, userInfo: userData) {
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

export async function getCredentialsService(userId: number) {
  const credentials = await getUserCredentials(userId);
  if(!credentials) {
    throw {code: 500, message: 'Could not get your credentials. Please try again'};
  }
  const decryptedCredentials: Credentials[] = await decryptCredentialsArray(credentials);
  return decryptedCredentials;
}

async function decryptCredentialsArray(credentials: Credentials[]) {
  return credentials.map((credential)=>{
    const {password: cryptedPassword} = credential;
    const decryptedPassword = decryptPassword(cryptedPassword);
    delete credential.userId;
    return { ... credential, password: decryptedPassword };
  });
}

export async function getCredentialByIdService(credentialIdString: string, userId: number) {
  const credentialId = parseInt(credentialIdString);
  const credential = await checkIfCredentialIsFromUser(credentialId, userId);
  const {password: cryptedPassword} = credential;
  const decryptedPassword = decryptPassword(cryptedPassword);
  delete credential.userId;
  return {... credential, password: decryptedPassword};
}

async function checkIfCredentialIsFromUser(credentialId: number, userId:number) {
  const credential = await getCredentialByIdAndUserId(credentialId, userId);
  if(!credential) {
    throw { code: 404, message: 'Credential not found'};
  }
  return credential;
}