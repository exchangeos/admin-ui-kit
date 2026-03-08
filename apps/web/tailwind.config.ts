import sharedConfig from '@admin-app/tailwind-config';
import type { Config } from 'tailwindcss';

const config: Config = {
  presets: [sharedConfig],

  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
};

export default config;
