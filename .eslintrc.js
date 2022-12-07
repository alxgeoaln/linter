module.exports = {
  root: true,
  extends: '@react-native-community',
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      rules: {
        '@typescript-eslint/no-shadow': ['error'],
        'no-shadow': 'off',
        'no-undef': 'off',
      },
    },
  ],
  rules: {
    'react-native/no-unused-styles': 2, // disallow unused styles
    'react-native/no-inline-styles': 2, // disallow styles declared within the component itself
    'react-native/no-color-literals': 2, // enforces variable names to be used for storing colors
    'no-console': 2,
  },
};
