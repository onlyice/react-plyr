const webpack = require('webpack');
const resolve = require('resolve');
const ManifestPlugin = require('webpack-manifest-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');

const publicPath = '/';

const plugins = [
  new CleanWebpackPlugin(),
  new CopyWebpackPlugin([{
    from: 'public/assets',
    to: 'build/assets'
  }]),
  new ManifestPlugin({
    fileName: 'manifest.json',
    publicPath: publicPath,
    generate: (seed, files) => {
      const manifestFiles = files.reduce((manifest, file) => {
        manifest[file.name] = file.path;
        return manifest;
      }, seed);

      return {
        files: manifestFiles,
      };
    },
  }),
  new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/),
  new ForkTsCheckerWebpackPlugin({
    eslint: true,
    typescript: resolve.sync('typescript', /node_modules/),
      async: true,
      useTypescriptIncrementalApi: true,
      checkSyntacticErrors: true,
      silent: true,
  })
];

module.exports = plugins;
