const path = require('path');
const merge = require('webpack-merge');

const TARGET = process.env.npm_lifecycle_event;
const webpack = require('webpack');
const PATHS = {

        app: path.join(__dirname, 'src'),

        build: path.join(__dirname, 'public')

};

process.env.BABEL_ENV = TARGET;

const common = {

// Entry accepts a path or an object of entries. We'll be using the

// latter form given it's convenient with more complex configurations.

        entry:{
                app: PATHS.app
        },
        resolve: {
          extensions: ['.js', '.jsx']
        },
        output: {

                path: PATHS.build,

                filename: 'bundle.js'

        },
        module: {
          loaders: [
            {
              test: /\.scss$/,
              loaders: ['style-loader', 'css-loader', 'sass-loader'],
              include: PATHS.app
            },
            {
              test: /\.jsx?$/,
              loaders: 'babel-loader',
                                query: {
                                        cacheDirectory: true,
                                        presets: ['react', 'es2015', 'survivejs-kanban']
                                },
              include: PATHS.app
            },

          ]
        }

};

//default configuration
if(TARGET === 'start' || !TARGET ) {
  module.exports  = merge(common, {
        devtool: 'eval-source-map',
        devServer: {
        contentBase: PATHS.build,
        // Enable history API fallback so HTML5 History API based
        // routing works. This is a good default that will come
        // in handy in more complicated setups.
        historyApiFallback: true,
        hot: true,
        inline: true,

        // Display only errors to reduce the amount of output.
        stats: 'errors-only',
        // Parse host and port from env so this is easy to customize.
        //dd
        // If you use Vagrant or Cloud9, set
        // host: process.env.HOST || '0.0.0.0';
        //
        // 0.0.0.0 is available to all network devices unlike default
        // localhost
        host: process.env.HOST,
        port: process.env.PORT
        },
        plugins: [
          new webpack.HotModuleReplacementPlugin(),
//        new NpmInstallPlugin({
//          save: true // --save
//        })
        ]
  });
}

if(TARGET === 'build'){
  module.exports = merge(common, {});
}
                                                             
