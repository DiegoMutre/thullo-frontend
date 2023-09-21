import { compare } from 'bcrypt';

import { prismaClient } from '@/app/lib/prismaClient';
import { Credentials } from '@/app/schemas';

/**
 * Checks if the email is registered in the DB and returns null if it isn't or if the password isn't correct
 */
export const login = async (credentials: Credentials) => {
  // Check if the email is registered
  const user = await prismaClient.user.findFirst({
    where: {
      email: credentials.email,
    },
  });

  // If the email isn't found, return null
  if (!user) return null;

  // Check if the password is correct
  const isRightPassword = await compare(credentials.password, user.password);

  if (!isRightPassword) return null;

  // Remove the `password` property from the user object
  const userWithoutPass = Object.fromEntries(
    Object.entries(user).filter(([key]) => key !== 'password'),
  );

  return userWithoutPass;
};
