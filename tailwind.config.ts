import type { Config } from 'tailwindcss';
import defaultTheme from 'tailwindcss/defaultTheme';
import colors from 'tailwindcss/colors';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        blue1: '#2F80ED',
        gray1: '#f2f2f2',
        gray2: '#e0e0e0',
        gray3: '#828282',
        gray4: '#bdbdbd',
      },
    },
  },
  plugins: [],
};
export default config;
