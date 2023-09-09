import Image from 'next/image';

import { AddBoardButton, CreateBoardPopup, Navbar } from '@/app/components';

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
      <main className='mx-auto mb-8 mt-16 w-3/4'>
        <div className='mb-10 flex items-center justify-between'>
          <h2 className='font-medium capitalize text-[#333]'>All boards</h2>
          <AddBoardButton />
        </div>
        <div className='grid grid-cols-4 gap-10'>
          {exampleBoards.map(exampleBoard => (
            <div
              key={exampleBoard.id}
              className='flex flex-col gap-4 rounded-2xl bg-white p-4 shadow-md'
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
        <span className='mt-10 flex justify-center text-gray4'>
          &copy;{new Date().getFullYear()} Diego Mutre, devchallenges.io
        </span>
      </main>
      <CreateBoardPopup />
    </>
  );
}
