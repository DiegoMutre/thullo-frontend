'use client';
import { MdAdd } from 'react-icons/md';

import { Button } from '@/app/components/Button';

export const AddBoardButton = () => {
  return (
    <Button
      variant='primary'
      onClick={() => {
        console.log('Open popup!');
      }}
    >
      <MdAdd /> Add
    </Button>
  );
};
