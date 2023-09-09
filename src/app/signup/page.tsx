import Image from 'next/image';
import { MdEmail, MdLock, MdPerson } from 'react-icons/md';
import Link from 'next/link';

import { Button, TextField } from '@/app/components';
import { notoSans } from '@/app/utils/fonts';

const SignupPage = () => {
  return (
    <main className='flex h-screen items-center'>
      <div className='mx-auto flex w-1/3 flex-col gap-6 rounded-3xl border border-gray4 bg-white px-12 py-10'>
        <Image
          src='/Logo.svg'
          alt='logo'
          height={88}
          width={88}
        />
        <h2
          className={`text-xl font-semibold text-[#333] ${notoSans.className}`}
        >
          Join Thullo
        </h2>
        <form className='flex flex-col gap-4'>
          <TextField
            leftIcon={<MdPerson />}
            type='text'
            placeholder='Username'
          />
          <TextField
            leftIcon={<MdEmail />}
            type='email'
            placeholder='Email'
          />
          <TextField
            leftIcon={<MdLock />}
            type='password'
            placeholder='Password'
          />
          <Button variant='primary'>Login</Button>
        </form>
        <span className='text-center'>
          Already have an account?{' '}
          <Link
            className='text-blue-500 hover:underline'
            href='/login'
          >
            Login
          </Link>
        </span>
      </div>
    </main>
  );
};

export default SignupPage;
