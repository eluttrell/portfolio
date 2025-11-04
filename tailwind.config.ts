import type { Config } from 'tailwindcss';

const config: Config = {
  // 1. Enable 'class' strategy for Dark Mode toggling
  darkMode: 'class',

  content: [
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {

    },
  },
  plugins: [],
};

export default config;