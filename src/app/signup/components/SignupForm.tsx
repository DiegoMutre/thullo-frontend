'use client';
import { MdPerson, MdEmail, MdLock } from 'react-icons/md';
import { SubmitHandler, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useMutation } from '@tanstack/react-query';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { signIn } from 'next-auth/react';

import { Button, TextField } from '@/app/components';
import { UserInput, userSchema } from '@/app/schemas';

export const SignupForm = () => {
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(userSchema),
  });

  const mutation = useMutation({
    mutationFn: async (data: UserInput) => {
      // Delete the previous server error
      setFormError(null);
      return await axios.post('http://localhost:3000/api/signup', data);
    },
  });

  const router = useRouter();
  const [formError, setFormError] = useState<string | null>(null);

  const onSubmit: SubmitHandler<UserInput> = async data => {
    try {
      // Send request to the API
      const res = await mutation.mutateAsync(data);

      if (res.status === 201) {
        // Automatically sign in when signing up
        const signInRes = await signIn('credentials', {
          email: res.data.email,
          password: data.password, // Use the password from the data coming from the form because the request doesn't return the password
          redirect: false,
        });

        // If there's an error when signing in, show this message
        // This must be handled by the developer (me)
        if (signInRes?.error) {
          setFormError('There was an unexpected error, please try again later');
          return;
        }

        // Redirect to the app page /app
        router.push('/app');
      }
    } catch (error) {
      // Check if the error is an axios type error
      if (axios.isAxiosError(error)) {
        // Check if the response exists because it can be undefined
        if (error.response) {
          // TODO Use constants here instead of plan strings that can change
          if (error.response.data.error === 'EmailAlreadyUsed') {
            setError('email', {
              message: 'Email already used',
            });
            return;
          }

          // TODO Use constants here instead of plan strings that can change
          if (error.response.data.error === 'ValidationError') {
            setFormError('There was an error with the fields, try again later');
            return;
          }

          // If there's a server error (5xx) display that message
          if (error.response.status >= 500) {
            setFormError('There was an unexpected error, try again later');
          }
        }
      }
    }
  };

  return (
    <form
      className='flex flex-col gap-4'
      onSubmit={handleSubmit(onSubmit)}
    >
      <TextField
        leftIcon={<MdPerson />}
        type='text'
        placeholder='Username'
        errorMessage={errors.username?.message}
        {...register('username')}
      />
      <TextField
        leftIcon={<MdEmail />}
        type='email'
        placeholder='Email'
        errorMessage={errors.email?.message}
        {...register('email')}
      />
      <TextField
        leftIcon={<MdLock />}
        type='password'
        placeholder='Password'
        errorMessage={errors.password?.message}
        {...register('password')}
      />
      <Button
        type='submit'
        variant='primary'
      >
        Create account
      </Button>
      {formError ? <span className='text-red-400'>{formError}</span> : null}
    </form>
  );
};
