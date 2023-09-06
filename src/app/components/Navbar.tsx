import Image from 'next/image';

export const Navbar = () => {
  return (
    <nav className='flex justify-between py-6 px-6'>
      <Image
        src={'/Logo.svg'}
        alt='logo'
        width={96} // It's a random width and height, nothing given specifically, so this can change
        height={96}
        className='cursor-pointer'
      />
      <div className='flex gap-12'>
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
        <div>
          {/* TODO User avatar here */}
          <span>Username</span>
          <button>Dropdown toggle button</button>
        </div>
      </div>
    </nav>
  );
};
