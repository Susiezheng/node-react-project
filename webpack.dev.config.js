/**
 *　　　　　　　　┏┓　　　┏┓+ +
 *　　　　　　　┏┛┻━━━┛┻┓ + +
 *　　　　　　　┃　　　　　　　┃ 　
 *　　　　　　　┃　　　━　　　┃ ++ + + +
 *　　　　　　 ████━████  +
 *　　　　　　　┃　　　　　　　┃ +
 *　　　　　　　┃　　　┻　　　┃
 *　　　　　　　┃　　　　　　　┃ + +
 *　　　　　　　┗━┓　　　┏━┛
 *　　　　　　　　　┃　　　┃ + + + +
 *　　　　　　　　　┃　　　┃ + 　　　　神兽保佑,代码无bug　　
 *　　　　　　　　　┃　　　┃　　+　　　　　　　　　
 *　　　　　　　　　┃　 　　┗━━━┓ + +
 *　　　　　　　　　┃ 　　　　　　　┣┓
 *　　　　　　　　　┃ 　　　　　　　┏┛
 *　　　　　　　　　┗┓┓┏━┳┓┏┛ + + + +
 *　　　　　　　　　　┃┫┫　┃┫┫
 *　　　　　　　　　　┗┻┛　┗┻┛+ + + +
 */
var path = require("path");
var webpack = require('webpack'); // 导入webpack模块
var CopyWebpackPlugin = require('copy-webpack-plugin');//拷贝文件
var HtmlWebpackPlugin = require('html-webpack-plugin'); // 生成html插件
var ExtractTextPlugin = require('extract-text-webpack-plugin'); // 生成 other 文件插件
const theme = require('./theme.json');

module.exports = {
    devtool: 'source-map',
    entry: {
        // 入口点文件
        'app': ['index.js'],
    },
    output: {   //输出点
        path: path.resolve(__dirname, 'ui'),
        filename: `./js/[name].js`,
        publicPath: "/assets/",
    },
    plugins: [
        new webpack.DllReferencePlugin({
            context: __dirname,
            manifest: require("./vendor/manifest.json"),
            name: 'libs'
        }),
        //根据模板插入css/js等生成最终HTML
        new HtmlWebpackPlugin({
            filename: './index.html',    //生成的html存放路径，相对于 path
            template: path.resolve(__dirname, 'src', 'tmp.html'),    //html模板路径，相对于webpack.config
            inject:true,    //允许插件修改哪些内容，包括head与body
            hash:true,    //为静态资源生成hash值
            minify:{    //压缩HTML文件
                removeComments:true,    //移除HTML中的注释
                collapseWhitespace:false    //删除空白符与换行符
            }
        }),
        new CopyWebpackPlugin([
          {
            from: path.resolve(__dirname, 'src/libs/'),
            to: './js/'
          },
          {
            from: path.resolve(__dirname, 'src/fonts/'),
            to: './fonts/'
          },
          {
            from: path.resolve(__dirname, 'src/antd_fonts/'),
            to: './fonts/'
          },
          {
            from: path.resolve(__dirname, 'vendor/'),
            to: './'
          }
        ]),
        new ExtractTextPlugin({
            filename: "./style/[name].css",
            allChunks: true,
        })
    ],
    module: {
        //加载器配置
        rules: [
            {
                test: /\.js$/,
                include: [path.resolve(__dirname, 'src')],
                loader: 'babel-loader',
                exclude: path.join(__dirname, 'node_modules')
            }, {
                test:/\.less$/,
                use: ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    use: ["css-loader",
                        {
                            loader: "less-loader",
                            options: {
                                modifyVars: theme
                            }
                        }
                    ]
                })
            }, {
                test: /\.css$/,
                use: ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    use: "css-loader"
                })
            }, {
                test:  /\.(png|jpg|jpeg|gif|ico)$/,
                use: [
                    {
                        loader: "url-loader",
                        options: {
                            limit: 8192,
                            name: "./images/[name].[ext]"
                        }
                    }
                ]
            }, {
                test: /\.(otf|eot|svg|ttf|woff)\??/,
                use: [
                    {
                        loader: "url-loader",
                        options: {
                            limit: 8192,
                            name: './font/[name].[ext]',
                        }
                    }
                ]
            }
        ]
    },
    //其它解决方案配置
    resolve:{
        //绝对路径, 查找module的话从这里开始查找(可选)
        modules: [
            path.join(__dirname, "src"),
            "node_modules"
        ],
        // //自动扩展文件后缀名，意味着我们require模块可以省略不写后缀名
        extensions:['.js','.json', '.less', '.css'],
        //别名配置
        alias: {
           'baiscUI':'components',
            'Utils': 'utils',
            'Service': 'services',
            'Controls':'Controls.json'
        }
    },
    devServer: {
        contentBase: path.join(__dirname, 'ui'),
        inline: false,
        host: '0.0.0.0',
        port: 8081,
        disableHostCheck: true,
        proxy: {
            //配置服务反向代理
            "/zsq": {
                 target: "http://127.0.0.1:3000/",
                 pathRewrite: {"^/zsq" : ""}
             }
        }
    }
};
