const Path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const EslintWebpackPlugin = require('eslint-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: {
    index: Path.resolve(__dirname, './src/index.ts'),
  },
  output: {
    path: Path.resolve(__dirname, 'dist'),
    libraryTarget: 'umd',
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx'],
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
      },
    ],
  },
  externals: {
    react: {
      commonjs: 'react',
      commonjs2: 'react',
      amd: 'react',
      root: 'React',
    },
    'react-dom': {
      commonjs: 'react-dom',
      commonjs2: 'react',
      amd: 'react-dom',
      root: 'ReactDOM',
    },
  },
  plugins: [
    new EslintWebpackPlugin({
      extensions: ['.ts', '.tsx'],
    }),
    new CleanWebpackPlugin(),
  ],
};
