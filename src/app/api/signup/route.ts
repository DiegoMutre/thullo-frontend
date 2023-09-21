import { ValidationError } from 'yup';
import { NextResponse } from 'next/server';

import { userSchema } from '@/app/schemas';
import { signUp } from './signup';

export const POST = async (req: Request) => {
  try {
    const data = await req.json();

    const validData = await userSchema.validate(data);

    const res = await signUp(validData);

    return NextResponse.json(res, {
      status: 201,
    });
  } catch (error) {
    // Check if it's a yup error
    if (error instanceof ValidationError) {
      return NextResponse.json(
        {
          error: error.name,
          message: error.message,
        },
        {
          status: 401,
        },
      );
    }

    // Check if it's `EmailAlreadyUsed` error
    return NextResponse.json(error, {
      status: 401,
    });
  }
};
