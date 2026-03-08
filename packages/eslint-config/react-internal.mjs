import js from '@eslint/js';
import tseslint from '@typescript-eslint/eslint-plugin';
import importPlugin from 'eslint-plugin-import';
import unicorn from 'eslint-plugin-unicorn';
import reactPlugin from 'eslint-plugin-react';
import reactHooksPlugin from 'eslint-plugin-react-hooks';
import jsxA11yPlugin from 'eslint-plugin-jsx-a11y';
import testingLibraryPlugin from 'eslint-plugin-testing-library';
import jestDomPlugin from 'eslint-plugin-jest-dom';
import turboPlugin from 'eslint-plugin-turbo';
import globals from 'globals';
import prettierConfig from 'eslint-config-prettier';

const tsRecommended = tseslint.configs['flat/recommended'];
const importRecommended = importPlugin.flatConfigs.recommended;
const importTypescript = importPlugin.flatConfigs.typescript;
const unicornRecommended = unicorn.configs['flat/recommended'];
const reactRecommended = reactPlugin.configs.flat.recommended;
const reactHooksRecommended = reactHooksPlugin.configs.flat.recommended;
const jsxA11yRecommended = jsxA11yPlugin.flatConfigs.recommended;
const testingLibraryReact = testingLibraryPlugin.configs['flat/react'];
const jestDomRecommended = jestDomPlugin.configs['flat/recommended'];
const turboRecommended = turboPlugin.configs['flat/recommended'];

export default [
  js.configs.recommended,
  ...tsRecommended,
  importRecommended,
  importTypescript,
  unicornRecommended,
  reactRecommended,
  reactHooksRecommended,
  jsxA11yRecommended,
  testingLibraryReact,
  jestDomRecommended,
  turboRecommended,
  prettierConfig,
  {
    languageOptions: {
      ecmaVersion: 2022,
      sourceType: 'module',
      globals: {
        ...globals.browser,
        ...globals.jest,
        ...globals.node,
      },
    },
    settings: {
      react: { version: 'detect' },
      'import/resolver': {
        typescript: true,
        node: true,
      },
    },
    rules: {
      '@typescript-eslint/no-unused-vars': ['error', { argsIgnorePattern: '^_' }],
      '@typescript-eslint/consistent-type-imports': ['warn', { prefer: 'type-imports' }],
      '@typescript-eslint/no-explicit-any': 'warn',
      'import/order': [
        'error',
        {
          groups: ['builtin', 'external', 'internal', 'parent', 'sibling', 'index'],
          'newlines-between': 'always',
          alphabetize: { order: 'asc' },
        },
      ],
      'react/react-in-jsx-scope': 'off',
      'react/prop-types': 'off',
      'unicorn/prevent-abbreviations': 'off',
      'unicorn/no-null': 'off',
      'unicorn/filename-case': [
        'error',
        { cases: { kebabCase: true, camelCase: true, pascalCase: true } },
      ],
    },
  },
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
