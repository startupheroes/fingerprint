const path = require("path");

const CompressionPlugin = require("compression-webpack-plugin");
module.exports = {
  mode: "production",
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "./dist"),
    filename: "fingerprint.js",
    libraryTarget: "umd",
    globalObject: "this",
    libraryExport: "default",
    library: "Fingerprint"
  },
  module: {
    rules: [
      {
        test: /\.(js)$/,
        exclude: /(node_modules|bower_components)/,
        use: "babel-loader"
      }
    ]
  },
  plugins: [new CompressionPlugin()]
};
