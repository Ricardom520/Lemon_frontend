const merge = require('webpack-merge')
const common = require('./webpack.base.js')
const path = require('path')
const open = require('opn') //打开浏览器
const chalk = require('chalk') // 改变命令行中输出日志颜色插件
const FriendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin')

module.exports = merge(common, {
    devtool: 'inline-source-map',
    devServer: {
        port: 8080,
        contentBase: '../dist',
        host: '0.0.0.0',
        hot: true,
        overlay: true,
        stats: 'errors-only',
        proxy: {
            '/': {
                target: 'http://192.168.227.128',
                changeOrigin: true,
            }
        },  
        after() {
            open('http://localhost:' + this.port)
                .then(() => {
                    console.log(
                        chalk.cyan(
                            '成功打开链接： http://localhost:' + this.port
                        )
                    )
                })
                .catch(err => {
                    console.log(chalk.red(err))
                })
        },
        historyApiFallback: {
            rewrites: [{ from: /./, to: '/index.html' }],
        },
    },
    output: {
        filename: 'js/[name].[hash].js',
        path: path.resolve(__dirname, '../dist'),
    },
    module: {
        rules: [
            {
                test: /\.(sa|sc|c)ss$/,
                use: [
                    'style-loader',
                    'css-loader',
                    // 'postcss-loader',
                    'sass-loader',
                ],
            },
            {
                test: /\.less$/,
                use: [
                    'style-loader',
                    'css-loader',
                    // 'postcss-loader',
                    'less-loader',
                ],
            },
            {
                test: /\.(png|svg|jpg|gif|jpeg|woff|woff2|ttf|eot|ico)$/,
                use: [
                  {
                    loader: 'file-loader',
                    options: {
                        esModule: false,
                        limit: 5000,
                        // 分离图片至imgs文件夹
                        name: "imgs/[name].[ext]",
                    }
                  },
                ]
            },
        ],
    },
    plugins: [new FriendlyErrorsWebpackPlugin()],
    mode: 'development',
})
