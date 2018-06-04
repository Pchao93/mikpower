var path = require("path");

module.exports = {
  context: __dirname,
  entry: "./frontend/mikpower.jsx",
  output: {
    path: path.resolve(__dirname, 'static'),
    filename: "bundle.js"
  },
  module: {
    rules: [
      {
        test: [/\.jsx?$/, /\.js?$/],
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['env', 'react']
        }
      }
    ]
  },
  devtool: 'source-map',
  resolve: {
    extensions: [".js", ".jsx", "*"]
  },
  mode: "development"

};
