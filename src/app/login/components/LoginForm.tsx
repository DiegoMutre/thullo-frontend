'use client';
import { MdEmail, MdLock } from 'react-icons/md';
import { SubmitHandler, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { signIn } from 'next-auth/react';

import { Button, TextField } from '@/app/components';
import { Credentials, credentialsSchema } from '@/app/schemas';

export const LoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Credentials>({
    resolver: yupResolver(credentialsSchema),
  });

  const [formErrorMessage, setFormErrorMessage] = useState<string | null>(null);

  const router = useRouter();

  const onSubmit: SubmitHandler<Credentials> = async data => {
    const res = await signIn('credentials', {
      ...data,
      redirect: false,
    });

    if (res?.error) {
      setFormErrorMessage('Invalid email or password');
      return;
    }

    router.push('/app');
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
