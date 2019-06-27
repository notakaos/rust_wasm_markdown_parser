const path = require('path')
const CopyPlugin = require('copy-webpack-plugin')

module.exports = {
  entry: "./index.js",
  output: {
    path: path.resolve(__dirname, "gh-pages"),
    filename: "index.js",
  },
  mode: "development",
  plugins: [
    new CopyPlugin([
      {from: 'index.html', to: 'index.html'},
      {from: 'markdown_parser.js', to: 'markdown_parser.js'},
      {from: 'markdown_parser_bg.wasm', to: 'markdown_parser_bg.wasm'},
    ])
  ]
}