module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ['plugin:react/recommended', 'airbnb'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: ['react', '@typescript-eslint'],
  rules: {
    // 提示要在jsx文件里手动引入React
    'react/react-in-jsx-scope': [2],
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
  },
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      parserOptions: {
        project: './tsconfig.json',
      },
      extends: ['airbnb-typescript'],
      rules: {
        '@typescript-eslint/no-unused-expressions': 0,
        'jsx-a11y/no-noninteractive-element-interactions': 0,
        'jsx-a11y/click-events-have-key-events': 0,
        'no-underscore-dangle': 0,
        'react/jsx-props-no-spreading': 0,
        'object-curly-newline': 0,
        'react/prop-types': 0,
        'func-names': 0,
        'import/export': 0,
        '@typescript-eslint/indent': 0,
        '@typescript-eslint/object-curly-spacing': [0], // 0无所谓，1警告，2报错
        'import/prefer-default-export': [0],
      },
    },
  ],
};
