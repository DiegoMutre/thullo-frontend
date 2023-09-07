import { Navbar } from '@/app/components';
import Image from 'next/image';
import { MdAdd } from 'react-icons/md';

const exampleBoards = [
  {
    id: 362362, // Random number
    boardTitle: 'Board example 1',
    boardImage: 'sample-image-card1.jpg',
  },
  {
    id: 362364, // Random number
    boardTitle: 'Board example 2',
    boardImage: 'sample-image-card2.jpg',
  },
  {
    id: 362464, // Random number
    boardTitle: 'Board example 3',
    boardImage: 'sample-image-card1.jpg',
  },
  {
    id: 472464, // Random number
    boardTitle: 'Board example 4',
    boardImage: 'sample-image-card2.jpg',
  },
  {
    id: 462364, // Random number
    boardTitle: 'Board example 5',
    boardImage: 'sample-image-card1.jpg',
  },
];

export default function Home() {
  return (
    <>
      <Navbar />
      <main className='mt-16 mb-8 w-3/4 mx-auto'>
        <div className='flex justify-between items-center mb-10'>
          <h2 className='text-[#333] font-medium capitalize'>All boards</h2>
          {/* The styles of this button seem to be repeating, likely will be moved to its own reusable component */}
          <button className='flex gap-1 items-center font-medium py-2 px-4 rounded-lg bg-blue-600 text-white'>
            <MdAdd /> Add
          </button>
        </div>
        <div className='grid grid-cols-4 gap-10'>
          {exampleBoards.map(exampleBoard => (
            <div
              key={exampleBoard.id}
              className='flex flex-col gap-4 bg-white p-4 rounded-2xl shadow-[0_4px_12px_rgb(0,0,0,0.10)]'
            >
              <Image
                className='rounded-lg'
                src={`/sample_img/${exampleBoard.boardImage}`}
                alt='board-image'
                width={220}
                height={130}
              />
              <p>{exampleBoard.boardTitle}</p>
              <div className='flex gap-2'>
                <Image
                  className='rounded-lg'
                  src='/sample_img/sample-avatar.jpg'
                  alt='member-avatar'
                  width={32}
                  height={32}
                />
                <Image
                  className='rounded-lg'
                  src='/sample_img/sample-avatar.jpg'
                  alt='member-avatar'
                  width={32}
                  height={32}
                />
                <Image
                  className='rounded-lg'
                  src='/sample_img/sample-avatar.jpg'
                  alt='member-avatar'
                  width={32}
                  height={32}
                />
              </div>
            </div>
          ))}
        </div>
        <span className='mt-10 text-[#bdbdbd] flex justify-center'>
          &copy;{new Date().getFullYear()} Diego Mutre, devchallenges.io
        </span>
      </main>
    </>
  );
}
