// {
//   "parser": "@typescript-eslint/parser",
//   "extends": [
//     "next/core-web-vitals",
//     "plugin:@typescript-eslint/recommended",
//     "prettier"
//   ],
//   "plugins": ["@typescript-eslint", "prettier"],
//   "rules": {
//     "prettier/prettier": [
//       "error",
//       {
//         "singleQuote": true
//       }
//     ],
//     "@typescript-eslint/explicit-module-boundary-types": "off",
//     "linebreak-style": ["error", "unix"],
//     "quotes": ["error", "single"]
//   }
// }

export default {
  root: true,
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint', 'react', 'react-hooks', 'prettier'],
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'prettier',
    'prettier/react',
  ],
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  rules: {
    'prettier/prettier': 'error',
  },
}