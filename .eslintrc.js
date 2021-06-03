module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  plugins: [
    '@typescript-eslint',
    'react',
    'deprecation',
  ],
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
  ],
  rules: {
    semi: ['error', 'never'],
    quotes: ['error', 'single', { 'avoidEscape': true }],
    'jsx-quotes': ['error', 'prefer-single'],
    'space-before-function-paren': ['error', 'always'],
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    indent: ['error', 2],
    '@typescript-eslint/no-empty-interface': 'off',
  }
};