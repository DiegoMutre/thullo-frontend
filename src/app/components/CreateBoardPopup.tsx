import { Button } from '@/app/components';
import { MdAdd, MdImage, MdLock } from 'react-icons/md';

export const CreateBoardPopup = ({ show = false }: { show?: boolean }) => {
  if (show) {
    return (
      <>
        <div className='absolute top-1/4 left-1/2 -translate-x-1/2 w-auto h-auto bg-white rounded-lg shadow-sm z-20'>
          {/* Cover Image here */}
          <form className='flex flex-col gap-6 p-6'>
            <input
              className='border border-gray2 rounded-lg py-2 px-4 placeholder:text-gray4 placeholder:font-medium placeholder:text-sm outline-none '
              type='text'
              placeholder='Add board title'
            />
            <div className='flex justify-between'>
              <Button variant='secondary'>
                <MdImage /> Cover
              </Button>
              <Button variant='secondary'>
                <MdLock /> Private
              </Button>
            </div>
            <div className='flex gap-4 items-center justify-end'>
              <button className='text-gray3'>Cancel</button>
              <Button variant='primary'>
                <MdAdd /> Create
              </Button>
            </div>
          </form>
        </div>
        {/* The semi-transparent background of the popup */}
        {/* I think there could be better approaches for this, but I'm gonna keep this for a while */}
        <div className='w-full h-full z-10 top-0 left-0 bg-[rgba(0,0,0,0.1)] fixed'></div>
      </>
    );
  }
  return null;
};
