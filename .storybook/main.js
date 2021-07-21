module.exports = {
  stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: ['@storybook/addon-links', '@storybook/addon-essentials'],
  webpackFinal: async (config, { configType }) => {
    // `configType` has a value of 'DEVELOPMENT' or 'PRODUCTION'
    // You can change the configuration based on that.
    // 'PRODUCTION' is used when building the static version of storybook.

    // Make whatever fine-grained changes you need
    const fileLoader = config.module.rules.find((item) =>
      item.test.test('.svg')
    );
    fileLoader.exclude = /\.svg$/;
    console.log(fileLoader, 'fileloader');
    config.module.rules.push({
      test: /\.svg$/,
      use: '@svgr/webpack',
    });

    // Return the altered config
    return config;
  },
};
