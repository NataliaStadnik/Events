import globals from 'globals';
import pluginJs from '@eslint/js';
import eslintConfigPrettier from 'eslint-config-prettier';

export default [
  {
    languageOptions: {
      globals: globals.browser,
      ecmaVersion: 'latest',
      sourceType: 'module',
    },

    plugins: {
      eslintConfigPrettier,
    },
  },
  {
    ignores: ['dist/'],
  },
  pluginJs.configs.recommended,
  eslintConfigPrettier,
];
