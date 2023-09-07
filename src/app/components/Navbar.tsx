import { notoSans } from '@/app/utils/fonts';
import Image from 'next/image';
import { MdOutlineArrowDropDown } from 'react-icons/md';

export const Navbar = () => {
  return (
    <nav className='flex justify-between py-6 px-6 bg-white shadow-[0_2px_2px_0_rgba(0,0,0,0.05)]'>
      <Image
        src={'/Logo.svg'}
        alt='logo'
        width={96} // It's a random width and height, nothing given specifically, so this can change
        height={96}
        className='cursor-pointer'
      />
      <div className='flex gap-12 items-center'>
        {/* For now using an arbitrary value for the shadow */}
        <form className='rounded-lg shadow-[0_4px_12px_rgb(0,0,0,0.10)]'>
          <input
            className='outline-none py-2 px-4 rounded-lg'
            type='search'
            placeholder='Keyword...'
          />
          <button
            className='bg-blue-600 py-2 px-4 text-white rounded-lg font-medium text-sm'
            type='submit'
          >
            Search
          </button>
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
