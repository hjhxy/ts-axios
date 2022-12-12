const path = require('path');

module.exports = {
  entry: "./src/index.ts",
  output: {
    path: path.resolve(__dirname, "../test/express/public/js"),
    filename: 'index.js'
  },
  module: {
    rules: [{
      test: /\.ts/,
      use: ['ts-loader']
    }]
  },
  resolve: { //允许文件的扩展名是ts
    extensions: [".ts", ".tsx", ".js"]
  },
  mode: 'development',
}
