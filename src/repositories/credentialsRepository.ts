import db from '../config/database.js';

import { credentialsType } from '../services/credentialsService.js';

export async function getCredentialsByTitleAndUserId(title: string, userId: number) {
  return await db.credentials.findMany({
    where: {
      title,
      userId
    }
  });
}

export async function getUserCredentials(userId: number) {
  return await db.credentials.findMany({
    where: {userId}
  });
}

export async function getCredentialByIdAndUserId(credentialId: number, userId: number) {
  return await db.credentials.findFirst({
    where:{
      id: credentialId,
      userId
    }
  });
}

export async function insertCredential(credentialInfo: credentialsType, userId: number){
  const { title, url, user, password } = credentialInfo;

  return await db.credentials.create({
    data: {
      title, 
      url, 
      user, 
      password,
      userId
    }
  });
}

export async function deleteCredentialById(credentialId: number) {
  return await db.credentials.delete({
    where:{
      id: credentialId
    }
  });
}