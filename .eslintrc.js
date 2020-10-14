const prettier = require('./.prettierrc.js');
module.exports = {
  root: true,
  parser: 'babel-eslint',
  extends: [
    'plugin:react/recommended',
    'airbnb',
    'prettier',
    'prettier/react',
  ],
  plugins: ['prettier', 'import'],
  rules: {
    'react/jsx-filename-extension': [
      'warn',
      {
        extensions: ['.js', '.jsx', '.json'],
      },
    ],
    'prettier/prettier': ['error', prettier],
    'react/display-name': 0,
    'react/no-unused-prop-types': 2,
    'react/no-unused-state': 2,
    'no-console': 1,
    'no-unused-vars': 2,
    'no-duplicate-imports': 2,
    'import/order': 2,
  },
};
