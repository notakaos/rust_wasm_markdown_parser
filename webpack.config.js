const path = require('path')
const CopyPlugin = require('copy-webpack-plugin')

module.exports = {
  entry: "./index.js",
  output: {
    path: path.resolve(__dirname, "docs"),
    filename: "index.js",
  },
  mode: "development",
  plugins: [
    new CopyPlugin([
      {from: 'index.html', to: 'index.html'}
    ])
  ]
}