import NextAuth, { AuthOptions } from 'next-auth';
import Credentials from 'next-auth/providers/credentials';

import { credentialsSchema } from '@/app/schemas';
import { login } from './login';

export const authOptions: AuthOptions = {
  providers: [
    Credentials({
      credentials: {
        email: {
          type: 'email',
        },
        password: {
          type: 'password',
        },
      },
      async authorize(credentials) {
        try {
          // Validate if the `credentials` meet the requirements
          const validCredentialsObj =
            await credentialsSchema.validate(credentials);

          const user = await login(validCredentialsObj);

          if (!user) return null;

          return {
            id: user.id,
            email: user.email,
            name: user.username,
          };
        } catch (error) {
          // Returns null to make it know that the authentication failed, no matter the error
          // Although, the error to be thrown here is likely to be a yup error (ValidationError)
          // So, it's something that needs to be fixed in the client, not here
          return null;
        }
      },
    }),
  ],
  session: {
    strategy: 'jwt',
  },
  pages: {
    signIn: '/login',
  },
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
