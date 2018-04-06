const path = require('path');
const SRC_DIR = path.join(__dirname, '/src');

module.exports = {
  devtool: 'source-map',
  entry: `${SRC_DIR}/index.js`,
  output: {
   filename: 'bundle.js',
   path: path.resolve(__dirname, 'public/dist')
  },
  module: {
    loaders: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        include: SRC_DIR,
        loader: 'babel-loader',
        query: {
          presets: ['react', 'env', 'stage-1']
        }
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx']
  }
};
