module.exports = {
  entry: './src/index.js',
  output: {
    path: __dirname,
    filename: './lib/app.js',
  },
  module: {
    loaders: [
      { test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/ },
    ],
  },
};
