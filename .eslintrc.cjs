/** @type {import("eslint").Linter.Config} */
const config = {
  "extends": [
    "next",
    "next/core-web-vitals",
    "prettier",                       // npm package eslint-config-prettier
    "plugin:prettier/recommended",    // npm package eslint-plugin-prettier
  ]
}

module.exports = config
