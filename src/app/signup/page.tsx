import Image from 'next/image';
import Link from 'next/link';
import { Metadata } from 'next';

import { notoSans } from '@/app/utils/fonts';
import { SignupForm } from '@/app/signup/components/SignupForm';

export const metadata: Metadata = {
  title: 'Signup Thullo',
};

const SignupPage = () => {
  return (
    <main className='flex h-screen items-center'>
      <div className='mx-auto flex w-1/3 flex-col gap-6 rounded-3xl border border-gray4 bg-white px-12 py-10'>
        <Image
          src='/Logo.svg'
          alt='logo'
          height={88}
          width={88}
          // `priority` because it's one the largest contentful paint (LCP)
          priority
        />
        <h2
          className={`text-xl font-semibold text-[#333] ${notoSans.className}`}
        >
          Join Thullo
        </h2>
        <SignupForm />
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
