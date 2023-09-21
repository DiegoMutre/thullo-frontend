import { Prisma } from '@prisma/client';
import { hash } from 'bcrypt';

import { prismaClient } from '@/app/lib/prismaClient';

export const signUp = async (userData: Prisma.UserCreateInput) => {
  // If the email is already used, throw an object with the error message
  if (await isEmailAlreadyUsed(userData.email)) {
    throw {
      error: 'EmailAlreadyUsed',
      message: 'Email address is already in use',
    };
  }

  // Rounds to be used to hash the password
  const rounds = 10;

  // Hash the password
  const passwordHashed = await hash(userData.password, rounds);

  const user = await prismaClient.user.create({
    data: {
      ...userData,
      password: passwordHashed,
    },
    select: {
      id: true,
      email: true,
      username: true,
    },
  });

  return user;
};

/**
 * Checks if the `email` received as parameter is already in the database in a user collection
 */
const isEmailAlreadyUsed = async (email: string) => {
  const user = await prismaClient.user.findFirst({
    where: {
      email,
    },
  });

  if (user) return true;

  return false;
};
