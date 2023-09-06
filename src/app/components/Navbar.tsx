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
        <form>
          <input type='search' placeholder='Keyword...' />
          <button type='submit'>Search</button>
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
