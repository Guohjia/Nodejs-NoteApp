const path=require('path'),
      webpack=require('webpack')

module.exports={
    entry:path.join(__dirname,'js/index.js'),
    output:{
        path:path.join(__dirname,"../public"),
        filename:'./javascripts/index.js'
    },
    module:{
        rules:[
            {
                test:/\.scss$/,
                use:['style-loader','css-loader','sass-loader']
            },
            {
                test: /\.(png|jpg|svg|gif)$/,
                use: {
                    loader: 'file-loader',
                    options: {
                        name: './images/[name]_[sha512:hash:base64:7].[ext]'
                    }
                }
            }
        ]
    },
    resolve:{
        alias:{
            jquery:path.join(__dirname,"js/lib/jquery-3.2.0.min.js")
        }
    },
    plugins:[
        new webpack.ProvidePlugin({
                $: 'jquery'
        })
    ]
}