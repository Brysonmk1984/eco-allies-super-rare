const path = require("path");
const CopyWebpackPlugin = require("copy-webpack-plugin");

module.exports = {
  entry: "./src/index.js",
   output: {
    path: path.join(__dirname, 'dist'),
    publicPath : '/',
    filename: 'index.js',
  },
  // devServer: {
  //   contentBase: './',
  //   hot: false
  // },
  plugins: [
    new CopyWebpackPlugin([{ from: "./src/index.html", to: "index.html" }]),
  ],
  devServer: { contentBase: path.join(__dirname, "dist"), compress: false },
  mode : 'development'
};
