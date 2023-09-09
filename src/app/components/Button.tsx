import { ButtonHTMLAttributes } from 'react';

// The styles used by default in most buttons
const defaultBtnStyles =
  'py-2 px-4 rounded-lg font-medium gap-1 flex items-center justify-center';

// Styles added per variant
const variantsStyles = {
  primary: 'bg-blue1 text-white',
  secondary: 'bg-gray1 text-gray3',
};

export const Button = ({
  variant,
  className,
  ...props
}: ButtonHTMLAttributes<HTMLButtonElement> & {
  variant: keyof typeof variantsStyles;
}) => {
  return (
    <button
      className={`${defaultBtnStyles} ${variantsStyles[variant]} ${className}`}
      {...props}
    />
  );
};
