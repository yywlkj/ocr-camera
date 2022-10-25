module.exports = {
  transpileDependencies: true,
  devServer: {
    host: 'localhost',
    port: 8080,
    proxy: "http://172.16.100.45:8083/"
  },
}
