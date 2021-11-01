const path = require('path');
const nodeExternals = require('webpack-node-externals');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const NpmDtsPlugin = require('npm-dts-webpack-plugin');

module.exports = {
  entry: path.resolve(__dirname, './src/index.ts'),
  mode: 'production',
  target: 'node',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: [
          {
            loader: 'ts-loader',
            options: {
              configFile: 'tsconfig.build.json',
            },
          },
        ],
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: ['*', '.ts'],
  },
  externals: [nodeExternals()],
  plugins: [
    new CleanWebpackPlugin(),
    new NpmDtsPlugin({
      logLevel: 'warn',
      output: './dist/main.d.ts',
    }),
  ],
};
