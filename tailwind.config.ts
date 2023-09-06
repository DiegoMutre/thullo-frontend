import type { Config } from 'tailwindcss';
import defaultTheme from 'tailwindcss/defaultTheme';
import colors from 'tailwindcss/colors';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  // When overriding a value of the `theme` object, is important to add the `defaultTheme` and the values overridden
  // Otherwise, the default values won't be included
  // Although, the `extend` can be used to add another color, but in this case I (Diego) want to override the `600` property of the blue color
  theme: {
    ...defaultTheme,
    colors: {
      ...colors,
      blue: {
        ...colors.blue,
        '600': '#2F80ED',
      },
    },
  },
  plugins: [],
};
export default config;
