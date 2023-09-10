import { InputHTMLAttributes, ReactNode, forwardRef } from 'react';

interface TextFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  leftIcon?: ReactNode;
  errorMessage?: string;
}

export const TextField = forwardRef<HTMLInputElement, TextFieldProps>(
  ({ leftIcon, errorMessage, ...props }, ref) => {
    return (
      <div>
        <div className='flex items-center gap-2 rounded-lg border border-gray4 bg-white px-4 py-2'>
          <span className='text-2xl text-gray4'>{leftIcon}</span>
          <input
            className='w-full p-0 outline-none placeholder:font-medium placeholder:text-gray4'
            ref={ref}
            {...props}
          />
        </div>
        <span className='text-red-400'>{errorMessage}</span>
      </div>
    );
  },
);

// Eslint throws an error asking for component displayName when using `forwardRef`
// So, this solves the problem
TextField.displayName = 'TextField';
