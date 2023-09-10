'use client';
import { MdPerson, MdEmail, MdLock } from 'react-icons/md';
import { SubmitHandler, useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

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
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit: SubmitHandler<Inputs> = data => {
    // Send request to the API
    console.log(data);
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
    </form>
  );
};
