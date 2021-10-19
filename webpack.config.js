const path = require('path');

module.exports = {
  mode: 'development',
  entry: path.resolve(__dirname, 'dist', 'index.js'),
  output: {
    filename: 'index.js',
    path: path.resolve(__dirname, 'res'),
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".jsx"],
    modules: [path.resolve(__dirname, "src"), "node_modules"],
    alias: {
      "@src": path.resolve(__dirname, 'dist'),
      "@res": path.resolve(__dirname, 'res'),
    },
  },
};
