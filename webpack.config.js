module.exports = {
  entry: './src/index.js',
  output: {
    path: __dirname,
    filename: "bundle.js",
    publicPath: "/dist/"
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: "babel",
        include: __dirname,
        query: {
          cacheDirectory: true,
          presets: ['es2015', 'react', 'react-hmre']
        }
      }
    ]
  }
}