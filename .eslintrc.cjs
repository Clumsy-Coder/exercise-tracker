/** @type {import("eslint").Linter.Config} */
const config = {
  root: true,
  extends: [
    'next',
    'next/core-web-vitals',
    'prettier', // npm package eslint-config-prettier
    'airbnb', // npm package eslint-config-airbnb
    'airbnb-typescript', // npm package eslint-config-airbnb-typescript
    'airbnb/hooks', // npm package eslint-config-airbnb
    'eslint:recommended',
    'plugin:react/recommended', // npm package eslint-plugin-react
    'plugin:@typescript-eslint/recommended', // npm package @typescript-eslint/eslint-plugin
    'plugin:prettier/recommended', // npm package eslint-plugin-prettier
  ],
  plugins: [
    '@typescript-eslint',
    'react',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: './tsconfig.json',
  },
  rules: {
    'prettier/prettier': 'warn',
    'react/react-in-jsx-scope': 'off', // https://stackoverflow.com/a/61160875/3053548,
    'import/prefer-default-export': 'off',
  },
};

module.exports = config;
