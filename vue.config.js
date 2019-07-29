module.exports = {
  devServer: {
    // Define mock server to simulate backend APIs
    before: require('./mock'),
  },
}
