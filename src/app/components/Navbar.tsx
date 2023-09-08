import { Button } from '@/app/components';
import { notoSans } from '@/app/utils/fonts';
import Image from 'next/image';
import { MdOutlineArrowDropDown } from 'react-icons/md';

export const Navbar = () => {
  return (
    <nav className='flex justify-between py-6 px-6 bg-white shadow-sm'>
      <Image
        src={'/Logo.svg'}
        alt='logo'
        width={96} // It's a random width and height, nothing given specifically, so this can change
        height={96}
        className='cursor-pointer'
      />
      <div className='flex gap-12 items-center'>
        <form className='rounded-lg flex shadow-md'>
          <input
            className='outline-none py-2 px-4 rounded-lg placeholder:text-gray4 placeholder:text-sm placeholder:font-medium'
            type='search'
            placeholder='Keyword...'
          />
          <Button className='text-sm' variant='primary' type='submit'>
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
            className={`text-[#333] font-bold text-sm ${notoSans.className}`}
          >
            Xanthe Neal
          </span>
          <button>
            <MdOutlineArrowDropDown />
          </button>
        </div>
      </div>
    </nav>
  );
};
