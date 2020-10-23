module.exports = {
  "publicPath": "./",
  "lintOnSave": false,
  "transpileDependencies": [
    "vuetify"
  ],
  devServer: {
    proxy: {
      '/sap': {
        target: 'https://vhstddejci.hec.stedingroep.nl:44300'
      } 
    }
  }
}