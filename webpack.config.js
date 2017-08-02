const ExtractTextWebpack = require('extract-text-webpack-plugin');
const fs = require('fs');
const path = require('path');

module.exports = {
    entry:path.resolve(__dirname, 'src', 'main.js'),
    output:{
        path: path.resolve(__dirname, 'build'),
        filename:'main.js'
    },
    module:{
        rules:[{
            test:/\.css$/,
            use:ExtractTextWebpack.extract({
                fallback:'style-loader',
                use:'css-loader'
            })
        },{
            test:/\.s(c|a)ss$/,
            use:ExtractTextWebpack.extract({
                use:'css-loader!sass-loader',
                fallback:'style-loader'
            })
        }]
    },
    plugins:[
        new ExtractTextWebpack("styles.css")
    ]
};
