module.exports = {
  transpileDependencies: true,
  devServer: {
    host: 'localhost',
    port: 8080,
    proxy: "http://127.0.0.1:8083/"
  },
}
