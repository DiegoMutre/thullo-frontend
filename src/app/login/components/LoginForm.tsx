'use client';
import { MdEmail, MdLock } from 'react-icons/md';
import { SubmitHandler, useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

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
  const { register, handleSubmit } = useForm<LoginInputs>({
    resolver: yupResolver(schema),
  });

  const onSubmit: SubmitHandler<LoginInputs> = data => {
    // TODO Send request to the api
    console.log('Sending data...', data);
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
        {...register('email')}
      />
      <TextField
        leftIcon={<MdLock />}
        type='password'
        placeholder='Password'
        {...register('password')}
      />
      <Button
        variant='primary'
        type='submit'
      >
        Login
      </Button>
    </form>
  );
};
