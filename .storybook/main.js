const Path = require('path');
module.exports = {
  stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: ['@storybook/addon-links', '@storybook/addon-essentials'],
  core: {
    builder: 'webpack5',
  },
  webpackFinal: async (config, { configType }) => {
    // `configType` has a value of 'DEVELOPMENT' or 'PRODUCTION'
    // You can change the configuration based on that.
    // 'PRODUCTION' is used when building the static version of storybook.

    // Make whatever fine-grained changes you need
    const fileLoader = config.module.rules.find((item) =>
      item.test.test('.svg')
    );
    fileLoader.exclude = /\.svg$/;

    config.module.rules.push({
      test: /\.svg$/,
      use: '@svgr/webpack',
    });
    config.module.rules.push({
      test: /\.less$/,
      use: [
        'style-loader',
        {
          loader: 'css-loader',
          options: {
            importLoaders: 2,
          },
        },
        {
          loader: 'postcss-loader',
          options: {
            postcssOptions: {
              plugins: ['autoprefixer'],
            },
          },
        },
        'less-loader',
      ],
    });
    config.resolve.alias['src'] = Path.resolve(__dirname, '../src');

    // Return the altered config
    return config;
  },
};
