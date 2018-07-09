// See here for bootstrap css instructions
// https://stevenwestmoreland.com/2018/01/how-to-include-bootstrap-in-your-project-with-webpack.html

const webpack = require('webpack')

const config = {
    entry: './src/jsx/index.jsx',
    output: {
        path: __dirname + '/dist/js',
        filename: 'main.js'
    },
    watch: false,
    module: {
        rules: [
            { // sass
                test: /\.scss$/,
                use: [{loader: "style-loader"}, {loader: "css-loader"}, {loader: "sass-loader"}]
            },
            { // js
                test: /\.jsx$/,
                exclude: /node_modules/,
                use: [{loader:'babel-loader'}]
            }
        ]
    }
}

module.exports = config