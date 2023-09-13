'use client';
import { MdPerson, MdEmail, MdLock } from 'react-icons/md';
import { SubmitHandler, useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useMutation } from '@tanstack/react-query';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

import { Button, TextField } from '@/app/components';

const schema = yup.object({
  username: yup.string().required('Username is required'),
  email: yup
    .string()
    .required('Email is required')
    .email('Please enter a valid email address'),
  password: yup
    .string()
    .required('Password is required')
    .min(8, 'Password must be at least 8 characters long'),
});

type Inputs = yup.InferType<typeof schema>;

export const SignupForm = () => {
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const mutation = useMutation({
    mutationFn: async (data: Inputs) => {
      // Delete the previous server error
      setServerErrorMsg(null);
      return await axios.post('http://localhost:4000/api/auth/signup', data);
    },
  });

  const router = useRouter();
  const [serverErrorMsg, setServerErrorMsg] = useState<string | null>(null);

  const onSubmit: SubmitHandler<Inputs> = async data => {
    // Send request to the API
    try {
      const res = await mutation.mutateAsync(data);

      // If the response is 200, then is `Email already used` response
      if (res.status === 200) {
        setError('email', {
          message: 'Email already used',
        });
        return;
      }
      // Redirect to the home page /
      if (res.status === 201) {
        router.push('/');
      }
    } catch (error) {
      // Check if the error is an axios type error
      if (axios.isAxiosError(error)) {
        // The previous function transforms the `error` in a `AxiosError` type
        if (error.response?.status && error.response.status >= 500) {
          // Show an error message
          setServerErrorMsg('There was an unexpected error, try again later');
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
        Login
      </Button>
      {serverErrorMsg ? (
        <span className='text-red-400'>{serverErrorMsg}</span>
      ) : null}
    </form>
  );
};
