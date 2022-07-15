import db from '../config/database.js';

export async function findByEmail(email: string) {
  return await db.user.findFirst({
    where: {email}
  });
}

export async function findById(id: number) {
  return await db.user.findUnique({
    where: { id }, 
    select: {
      id: true,
      email: true,
      password: false
    }
    
  });
}

export async function createUser(email: string, password: string) {
  const result = await db.user.create({
    data: {
      email, 
      password
    }
  });
  return result;
}