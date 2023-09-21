import Image from 'next/image';
import { MdOutlineArrowDropDown } from 'react-icons/md';
import { getServerSession } from 'next-auth/next';

import { Button } from '@/app/components';
import { notoSans } from '@/app/utils/fonts';

export const Navbar = async () => {
  const session = await getServerSession();
  return (
    <nav className='flex justify-between bg-white px-6 py-6 shadow-sm'>
      <Image
        src={'/Logo.svg'}
        alt='logo'
        width={96} // It's a random width and height, nothing given specifically, so this can change
        height={96}
        className='cursor-pointer'
      />
      <div className='flex items-center gap-12'>
        <form className='flex rounded-lg shadow-md'>
          <input
            className='rounded-lg px-4 py-2 outline-none placeholder:text-sm placeholder:font-medium placeholder:text-gray4'
            type='search'
            placeholder='Keyword...'
          />
          <Button
            className='text-sm'
            variant='primary'
            type='submit'
          >
            Search
          </Button>
        </form>
        <div className='flex items-center gap-2'>
          <Image
            className='rounded-lg'
            src='/sample_img/sample-avatar.jpg'
            alt='user-avatar'
            width={32}
            height={32}
          />
          <span
            className={`text-sm font-bold text-[#333] ${notoSans.className}`}
          >
            {session?.user?.name}
          </span>
          <button>
            <MdOutlineArrowDropDown />
          </button>
        </div>
      </div>
    </nav>
  );
};
