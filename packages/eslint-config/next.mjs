import nextCoreWebVitals from 'eslint-config-next/core-web-vitals';
import nextTypeScript from 'eslint-config-next/typescript';

export default [
  ...nextCoreWebVitals,
  ...nextTypeScript,
  {
    ignores: [
      'node_modules/**',
      'dist/**',
      '.next/**',
      'build/**',
      '*.config.js',
      '*.config.cjs',
      '*.config.mjs',
      '*.config.ts',
    ],
  },
];
