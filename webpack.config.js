const webpack = require('webpack')

const config = {
    entry: './src/js/index.js',
    output: {
        path: __dirname + '/dist/js',
        filename: 'main.js'
    },
    watch: false
}

module.exports = config