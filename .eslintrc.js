module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true
  },
  extends: ['standard', 'plugin:react/recommended'],
  overrides: [
    {
      env: {
        node: true
      },
      files: ['.eslintrc.{js,cjs}'],
      parserOptions: {
        sourceType: 'script'
      }
    }
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  plugins: ['react'],
  rules: {
    'keyword-spacing': ['error', { before: true, after: true }],
    'no-unused-vars': 'error',
    'sort-keys': 'off',
    '@typescript-eslint/sort-type-union-intersection-members': 'off',
    'react/react-in-jsx-scope': 'off',
    'space-before-function-paren': 'off',
    'react/prop-types': 'off',
    // Ajustar reglas para multiline ternary expressions
    'multiline-ternary': ['error', 'always-multiline'],
    camelcase: 'off'
  }
}
