const path = require('path')

module.exports = {
    entry: {
        main: './src/vue-cookie.js'
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'vue-cookie.js',
        libraryTarget: 'umd',
        library: 'VueCookie'
    }
}