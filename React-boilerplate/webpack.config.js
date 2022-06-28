const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
module.exports = {
  module:{
    rules:[
      {
        test:/\.m?js$/,
        exclude:/(node_modules|bower_components)/,
        use:{
          loader:"babel-loader",
          options:{
            presets: ['@babel/preset-env', '@babel/preset-react']
          }
        }
      },
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },

    ],
  },
  entry: './src/index.js',
  output: {
    filename: 'main.bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  devtool: "source-map",
  mode:"production",
  plugins:[
    new HtmlWebpackPlugin(
      {
        filename:'index.html',
        template:"./src/index.html",
      }
    )
  ],
  devServer: {
    static: {
      directory: path.join(__dirname, 'dist'),
    },
    compress: true,
    port: 9000,
  },
  performance: {
    hints: false,
    maxEntrypointSize: 512000,
    maxAssetSize: 512000
  }
};