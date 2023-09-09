import { InputHTMLAttributes, ReactNode } from 'react';

interface TextFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  leftIcon?: ReactNode;
}

export const TextField = ({ leftIcon, ...props }: TextFieldProps) => {
  return (
    <div className='flex items-center gap-2 rounded-lg border border-gray4 bg-white px-4 py-2'>
      <span className='text-2xl text-gray4'>{leftIcon}</span>
      <input
        className='w-full p-0 outline-none placeholder:font-medium placeholder:text-gray4'
        {...props}
      />
    </div>
  );
};
