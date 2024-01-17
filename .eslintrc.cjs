/** @type {import("eslint").Linter.Config} */
const config = {
  root: true,
  "extends": [
    "next",
    "next/core-web-vitals",
    "prettier",                       // npm package eslint-config-prettier
    "plugin:prettier/recommended",    // npm package eslint-plugin-prettier
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended"   // npm package @typescript-eslint/eslint-plugin
  ],
  plugins: [
    '@typescript-eslint'
  ],
  parser: '@typescript-eslint/parser',
  rules: {
    "prettier/prettier": "warn",
  }
}

module.exports = config;
