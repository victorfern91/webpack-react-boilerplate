module.exports = {
  parser: 'babel-eslint',
  extends: [
    'airbnb',
    'prettier'
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: [
    'react',
    'jest'
  ],
  rules: {
    'comma-dangle': ['error', 'never'],
    'import/no-extraneous-dependencies': 'off',
    'max-len': ["error", { "code": 120 }],
    'prefer-destructuring': 'off',
    'import/no-unresolved': 'off',
    'global-require': 'off'
  },
  env: {
    jest: true,
    browser: true,
    es6: true
  }
};
