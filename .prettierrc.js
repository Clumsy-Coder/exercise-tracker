/** @type {import("prettier").Config} */
const config = {
  semi: true,
  singleQuote: true,
  trailingComma: "all",
  tabWidth: 2,
  printWidth: 100,
  bracketSpacing: true,
  jsxBracketSameLine: false,
  arrowParens: "always",
  endOfLine: "lf",
  useTabs: false,
  jsxSingleQuote: true,
  singleAttributePerLine: true,
  // tailwindConfig: './tailwind.config.ts',
  // tailwindFunctions: ['clsx', 'cva'],
  // tailwindAttributes: ['containerStyles', 'otherClasses'],
  // plugins: ['prettier-plugin-tailwindcss'],
};

module.exports = config