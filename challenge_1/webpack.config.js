module.exports = {
  entry: './client/src/index.jsx',
  output: {
    path: __dirname + '/public',
    publicPath: '/',
    filename: 'history.js'
  },
  mode: 'development',
  devtool: 'source-map',
  module : {
    loaders : [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: 'babel-loader',
        query: {
          presets: ['react', 'es2015']
       }
      }
    ]
  }
};