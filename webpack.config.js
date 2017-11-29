const webpack = require('webpack');
module.exports={
    entry: "./app/index.js",
    output: {
        filename: "./build/bundle.js"
    },
    devServer: {
        inline: true,
        hot: true},
    module:{
        loaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: "babel-loader",
                query: {
                    presets: ["es2015"]
                }
            }
        ]
    },
    plugins :[
        new webpack.NamedModulesPlugin(),
        new webpack.HotModuleReplacementPlugin()
    ]
}