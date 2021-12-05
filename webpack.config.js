const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    entry:'./index.js',
    output:{
        path:path.resolve(__dirname,'dist'),
        filename:'index.js'
    },
    plugins:[
        new HtmlWebpackPlugin({
            filename:'index.html',
            template:'./index.html'
        })
    ]
}