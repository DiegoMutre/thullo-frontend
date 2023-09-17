import Image from 'next/image';
import Link from 'next/link';

import { notoSans } from '@/app/utils/fonts';
import { LoginForm } from '@/app/login/components/LoginForm';

const LoginPage = () => {
  return (
    <main className='flex h-screen items-center'>
      <div className='mx-auto flex w-1/3 flex-col gap-6 rounded-3xl border border-gray4 bg-white px-12 py-10'>
        <Image
          src='/Logo.svg'
          alt='logo'
          height={88}
          width={88}
          priority
        />
        <h2
          className={`text-xl font-semibold text-[#333] ${notoSans.className}`}
        >
          Login
        </h2>
        <LoginForm />
        <span className='text-center'>
          Don&apos;t have an account?{' '}
          <Link
            className='text-blue-500 hover:underline'
            href='/signup'
          >
            Signup here
          </Link>
        </span>
      </div>
    </main>
  );
};

export default LoginPage;
