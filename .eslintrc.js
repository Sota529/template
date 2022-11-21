module.exports = {
  plugins: ['simple-import-sort', 'import'],
  rules: {
    'no-console': ['error', { allow: ['warn', 'error'] }],
    'comma-dangle': ['error', 'never'],
    'no-trailing-spaces': 'error',
    '@typescript-eslint/triple-slash-reference': 'off',
    'simple-import-sort/imports': 'error',
    'simple-import-sort/exports': 'error',
    'import/first': 'error',
    'import/newline-after-import': 'error',
    'import/no-duplicates': 'error'
  },
  extends: [
    'next/core-web-vitals',
    'eslint:recommended',
    'standard-with-typescript',
    'plugin:json/recommended',
    'prettier'
  ],
  parserOptions: {
    project: './tsconfig.json'
  },
  overrides: [
    {
      files: ['./src/**/*.stories.mdx', './src/**/*.stories.@(js|jsx|ts|tsx)'],
      rules: {
        ...module.rules,
        '@typescript-eslint/consistent-type-assertions': 'off'
      }
    }
  ]
}
