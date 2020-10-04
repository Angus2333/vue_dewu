module.exports = {

    configureWebpack: {

        // other webpack options to merge in ...

    },

    // devServer Options don't belong into `configureWebpack`

    devServer: {

        public: '0.0.0.0:8080',

        hot: true,

        disableHostCheck: true,
        // proxy: {      
        //     '/api': {
        //       target: 'http://localhost:8080/api',
        //       changeOrigin: true,
        //       ws: true,
        //       pathRewrite: {
        //         '^/api': '/static/mock'
        //       }
        //     }
        //   },

    }



};