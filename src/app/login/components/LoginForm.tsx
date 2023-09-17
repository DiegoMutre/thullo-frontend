'use client';
import { MdEmail, MdLock } from 'react-icons/md';
import { SubmitHandler, useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useMutation } from '@tanstack/react-query';
import axios, { isAxiosError } from 'axios';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

import { Button, TextField } from '@/app/components';

const schema = yup.object({
  email: yup
    .string()
    .required('Email is required')
    .email('Please enter a valid email'),
  password: yup
    .string()
    .required('Password is required')
    .min(8, 'Password must be at least 8 characters long'),
});

type LoginInputs = yup.InferType<typeof schema>;

export const LoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginInputs>({
    resolver: yupResolver(schema),
  });

  const { mutateAsync } = useMutation({
    mutationFn: async (data: LoginInputs) => {
      return await axios.post('http://localhost:4000/api/auth/login', data, {
        withCredentials: true, // Allow receiving cookies
      });
    },
  });

  const [formErrorMessage, setFormErrorMessage] = useState<string | null>(null);

  const router = useRouter();

  const onSubmit: SubmitHandler<LoginInputs> = async data => {
    try {
      // Send request to the login endpoint
      // TODO Do something with the data returned
      await mutateAsync(data);
      // Go to boards page (home page)
      router.push('/');
    } catch (error) {
      // Check if is an axios error and get typescript types about the error
      if (isAxiosError(error)) {
        // Catch invalid credentials error
        if (error.response?.status === 401) {
          setFormErrorMessage(error.response?.data.message);
          return;
        }

        // Catch server errors (500) and network errors (when the API is off)
        if (
          (error.response?.status && error.response.status >= 500) ||
          error.code === 'ERR_NETWORK'
        ) {
          // Display message about server error
          setFormErrorMessage('There was an error, try again later');
          return;
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
        variant='primary'
        type='submit'
      >
        Login
      </Button>
      {formErrorMessage ? (
        <span className='text-red-400'>{formErrorMessage}</span>
      ) : null}
    </form>
  );
};
