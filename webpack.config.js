const path = require('path');
const nodeExternals = require('webpack-node-externals');

module.exports = {
  entry: path.resolve(__dirname, './src/index.ts'),
  mode: 'production',
  target: 'node',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ]
  },
  resolve: {
    extensions: ['*', '.ts']
  },
  externals: [nodeExternals()],
  // devServer: {
  //   contentBase: path.resolve(__dirname, './dist'),
  // },
};
