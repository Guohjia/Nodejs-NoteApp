const path=require('path'),
      webpack=require('webpack')

module.exports={
    entry:path.join(__dirname,'js/index.js'),
    output:{
        path:path.join(__dirname,"../public/javascripts"),
        filename:'index.js'
    },
    module:{
        rules:[
            {
                test:/\.scss$/,
                use:['style-loader','css-loader','sass-loader']
            }
        ]
    },
    resolve:{
        alias:{
            jquery:path.join(__dirname,"lib/jquery-3.2.0.min.js")
        }
    },
    plugins:[
        new webpack.ProvidePlugin({
                $: 'jquery'
        })
    ]
}