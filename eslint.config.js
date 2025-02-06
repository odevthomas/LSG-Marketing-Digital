import js from '@eslint/js';
import globals from 'globals';
import react from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';

export default [
  { 
    ignores: ['dist', 'node_modules', 'build', '*.config.js'] 
  },
  {
    files: ['**/*.{js,jsx,ts,tsx}'],
    languageOptions: {
      ecmaVersion: 'latest',
      globals: {
        ...globals.browser,
        ...globals.node,
        ...globals.es2021
      },
      parserOptions: {
        ecmaVersion: 'latest',
        ecmaFeatures: { 
          jsx: true,
          impliedStrict: true 
        },
        sourceType: 'module',
      },
    },
    settings: { 
      react: { 
        version: 'detect',
        createClass: 'createReactClass',
        flowVersion: 'detect'
      } 
    },
    plugins: {
      react,
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
    },
    rules: {
      ...js.configs.recommended.rules,
      ...react.configs.recommended.rules,
      ...react.configs['jsx-runtime'].rules,
      ...reactHooks.configs.recommended.rules,
      
      // Regras personalizadas
      'react/jsx-no-target-blank': ['error', { enforceDynamicLinks: 'always' }],
      'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],
      'react-hooks/exhaustive-deps': 'warn',
      'react/prop-types': 'error',
      'react/jsx-key': 'error',
      'no-console': ['warn', { allow: ['warn', 'error'] }],
      'no-unused-vars': ['error', { argsIgnorePattern: '^_' }],
      'prefer-const': 'error',
      'no-var': 'error'
    },
  },
];
