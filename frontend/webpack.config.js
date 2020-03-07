const path = require("path");

module.exports = {
  mode: "development",
  entry: `${__dirname}/src/index.tsx`,
  output: {
    path: path.resolve(
      __dirname,
      "../backend/modules/server/public/javascripts/"
    ),
    filename: "index.js"
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: "ts-loader"
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: "style-loader" // creates style nodes from JS strings
          },
          {
            loader: "css-loader" // translates CSS into CommonJS
          }
        ]
      }
    ]
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".json"]
  },
  devtool: "inline-source-map",
  devServer: {
    contentBase: `${__dirname}/build`,
    port: "8888",
    historyApiFallback: { disableDotRule: true }
  }
};
