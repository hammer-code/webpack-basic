var path = require('path');

module.exports = {
  // __dirname global variable untuk menyediakan tentang lokasi file ini
  entry: path.resolve(__dirname, './src/app.js'),
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'app.bundle.js',
  }
}