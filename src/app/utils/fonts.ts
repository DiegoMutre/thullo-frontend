import { Noto_Sans, Poppins } from 'next/font/google';

// Global/Default font
export const poppins = Poppins({
  weight: ['400', '500', '600'], // For now, this can change
  subsets: ['latin'],
});

// Secondary font, used in certain cases
// Wasn't my choice, the design uses a second font for some reason
export const notoSans = Noto_Sans({
  weight: ['700'], // For now, this can change
  subsets: ['latin'],
});
