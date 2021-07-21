module.exports = {
  extends: '@commitlint/config-conventional',
  rules: {
    'type-enum': [
      2,
      'always',
      [
        'feat',
        'fix',
        'docs',
        'chore',
        'style',
        'test',
        'refactor',
        'perf',
        'test',
        'revert',
      ],
    ],
  },
};
