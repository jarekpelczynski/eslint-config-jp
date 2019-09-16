module.exports = {
  env: {
    browser: true,
    es6: true,
    jest: true,
    node: true,
    'jest/globals': true, // https://www.npmjs.com/package/eslint-plugin-jest#usage
    'shared-node-browser': true,
  },
  extends: ['airbnb', 'prettier', 'prettier/react'],
  plugins: ['jest', 'prettier'],
  rules: {
    'no-unused-vars': [
      'error',
      {vars: 'all', args: 'none', ignoreRestSiblings: true},
    ],
    'no-console': ['warn', {allow: ['warn']}],
    'react/jsx-curly-brace-presence': ['error', { props: 'never', children: 'never' }],
    'react/jsx-filename-extension': 0,
    // Prettier settings
    'prettier/prettier': [
      'error',
      {
        printWidth: 80,
        tabWidth: 2,
        useTabs: false,
        semi: true,
        singleQuote: true,
        trailingComma: 'all',
        bracketSpacing: true,
        jsxBracketSameLine: false,
        rangeStart: 0,
        rangeEnd: Infinity,
      },
    ],
  },
  parser: 'babel-eslint',
  parserOptions: {
    ecmaVersion: 6,
    sourceType: 'module',
    ecmaFeatures: {
      defaultParams: true,
      spread: true,
    },
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
};
