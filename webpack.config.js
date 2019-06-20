var path=require('path');

module.exports={
    mode:'development',
    entry:{
        app:'./app/app.js'
    },
    output:{
        path:path.resolve(__dirname+'/index')
    },
    module:{
        rules:[
            {
                test:/\.(sass)|(scss)$/,
                use:[
                    {loader:'style-loader'},
                    {loader:'css-loader'},
                    {loader:'sass-loader'}
                ]
            }
        ]
    }
}