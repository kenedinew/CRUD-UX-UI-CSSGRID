
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/app.js',
    output: {
        path: __dirname + '/build',
        filename:  'bundle.js'
    },
    plugins:[
        new HtmlWebpackPlugin({
            template: "./src/app.html"

        })
    ],
    devServer:{
        port: 8000  
    },
    module: {
        rules: [
          {
            test: /\.s[ac]ss$/i,
            use: [
              'style-loader',
              'css-loader',
              {
                loader: 'sass-loader',
                options: {
                  // Prefer `dart-sass`
                  implementation: require('sass'),
                },
              },
            ],
          },
        ],
      }
}