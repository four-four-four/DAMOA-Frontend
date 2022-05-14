module.exports = {
  env: {
    browser: true,
    node: true,
    jest: true
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
      modules: true
    }
  },
  extends: [
    'plugin:prettier/recommended',
    'plugin:jest-dom/recommended',
    'plugin:react/recommended',
    'react',
    'prettier'
  ],
  rules: { 'prettier/prettier': ['error', { endOfLine: 'auto' }] },
  settings: {
    react: {
      version: 'detect'
    }
  },
  plugins: ['react', 'testing-library', 'jest-dom', '@typescript-eslint'],
  globals: {
    google: 'readonly'
  }
};
