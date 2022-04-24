module.exports = {
  rules: {
    'no-console': ['error', { allow: ['warn', 'error'] }],
    'comma-dangle': ['error', 'never'],
    'no-trailing-spaces': 'error',
    '@typescript-eslint/triple-slash-reference': 'off'
  },
  extends: [
    'next/core-web-vitals',
    'eslint:recommended',
    'standard-with-typescript',
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
