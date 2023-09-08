import type { Config } from 'tailwindcss';

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
      // Actually this overrides the default values 😯, maybe I can use it later for the colors above
      boxShadow: {
        sm: '0 2px 2px rgba(0,0,0,0.05)',
        md: '0 4px 12px rgba(0,0,0,0.10)',
      },
    },
  },
  plugins: [],
};
export default config;
