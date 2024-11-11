// eslint-disable-next-line tsdoc/syntax
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
    'plugin:@typescript-eslint/recommended', // npm package @typescript-eslint/eslint-plugin
    'plugin:prettier/recommended', // npm package eslint-plugin-prettier
  ],
  plugins: [
    '@typescript-eslint',
    'eslint-plugin-tsdoc', // https://tsdoc.org/
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: './tsconfig.json',
  },
  rules: {
    'prettier/prettier': 'warn',
    'react/react-in-jsx-scope': 'off', // https://stackoverflow.com/a/61160875/3053548,
    'import/prefer-default-export': 'off',
    'max-len': 'off',
    'react/jsx-props-no-spreading': ['off'],
    'tsdoc/syntax': 'warn',
    'react/function-component-definition': ['error', { namedComponents: 'arrow-function' }],
    '@typescript-eslint/no-unused-vars': 'warn',
    'react/require-default-props': 'off',
    'react/jsx-first-prop-new-line': ['warn', 'multiline-multiprop'],
    'react/jsx-max-props-per-line': ['warn', { maximum: 1, when: 'multiline' }],
    '@typescript-eslint/no-shadow': 'off',
  },
};

module.exports = config;
