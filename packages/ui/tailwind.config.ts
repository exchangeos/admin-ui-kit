import sharedConfig from '@admin-app/tailwind-config';
import type { Config } from 'tailwindcss';

const config: Config = {
  presets: [sharedConfig],
  content: ['./src/**/*.{ts,tsx,mdx}'],
};

export default config;
