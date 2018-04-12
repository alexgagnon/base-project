module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es6: true,
    node: true,
    jest: true
  },
  extends: ['eslint:recommended', 'plugin:testcafe/recommended'],
  parser: 'babel-eslint',
  parserOptions: {
    sourceType: 'module'
  },
  plugins: ['html', 'jsx-a11y', 'react', 'testcafe', 'vue'],
  rules: {
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-unused-vars': process.env.NODE_ENV === 'production' ? 'error' : 'warn',
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    indent: [
      'error',
      2,
      {
        SwitchCase: 1,
        MemberExpression: 0
      }
    ],
    quotes: ['error', 'single', {allowTemplateLiterals: true}],
    semi: ['error', 'always'],
    'space-in-parens': ['error', 'never'],
    'object-curly-spacing': ['error', 'never']
  }
};
