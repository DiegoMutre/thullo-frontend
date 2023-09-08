import { Button } from '@/app/components';
import { MdAdd, MdImage, MdLock } from 'react-icons/md';

export const CreateBoardPopup = ({ show = false }: { show?: boolean }) => {
  if (show) {
    return (
      <>
        <div className='absolute left-1/2 top-1/4 z-20 h-auto w-auto -translate-x-1/2 rounded-lg bg-white shadow-sm'>
          {/* Cover Image here */}
          <form className='flex flex-col gap-6 p-6'>
            <input
              className='rounded-lg border border-gray2 px-4 py-2 outline-none placeholder:text-sm placeholder:font-medium placeholder:text-gray4 '
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
            <div className='flex items-center justify-end gap-4'>
              <button className='text-gray3'>Cancel</button>
              <Button variant='primary'>
                <MdAdd /> Create
              </Button>
            </div>
          </form>
        </div>
        {/* The semi-transparent background of the popup */}
        {/* I think there could be better approaches for this, but I'm gonna keep this for a while */}
        <div className='fixed left-0 top-0 z-10 h-full w-full bg-[rgba(0,0,0,0.1)]'></div>
      </>
    );
  }
  return null;
};
