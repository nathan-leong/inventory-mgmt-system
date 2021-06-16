const path = require('path');
const slsw = require('serverless-webpack');
const nodeExternals = require('webpack-node-externals');

const rootPath = path.join( '..', '..','..');
const srcPath = path.join(rootPath, 'src');

module.exports = (() => {

  return {
    context: path.resolve(srcPath),
    entry: './controllers/index.ts',
    mode: 'none',
    devtool: 'inline-source-map',
    target: 'node',
    externals: [nodeExternals({ modulesDir: path.join(rootPath, 'node_modules') })],
    output: {
      // library: '', 
      libraryTarget: 'commonjs',
      path: path.join(__dirname, '.webpack'),
      filename: 'index.js', // this should match the first part of function handler in serverless.yml,
    },
    resolve: {
      extensions: [
        '.js',
        '.json',
        '.ts',
        '.tsx'
      ]
    },
    module: {
      rules: [      
        {
          test: /\.json$/,
          type: 'javascript/auto',
          exclude: /node_modules/,
          loader: '@cloudflare/json-schema-ref-loader'
        },
        {
          test: /\.tsx?$/,
          exclude: /node_modules/,
          loader: 'ts-loader',
        },
        {
          test: /\.jsx?$/,
          exclude: /node_modules/,
          loader: 'babel-loader'
        }
      ]
    },
    plugins: [
    ],
  };
})();