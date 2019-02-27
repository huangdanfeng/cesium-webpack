const path = require('path');

const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin'); //html中间件，将打包的js注入index.html页面
// The path to the Cesium source code
const cesiumSource = '../node_modules/cesium/Source';
const cesiumWorkers = '../Build/Cesium/Workers';

const CopywebpackPlugin = require('copy-webpack-plugin');



module.exports = {
    context: __dirname,
    entry: {
        app: '../src/index.js'
    },
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, '../dist'),
        // Needed to compile multiline strings in Cesium
        /*因为某些版本的webpack默认\t在输出时在每行之前添加制表符。
        Cesium具有多行字符串的实例，因此我们需要使用空前缀覆盖此默认值''*/
        sourcePrefix: ''
    },
    module: {
        rules: [{
            test: /\.css$/,
            use: [ 'style-loader', 'css-loader' ]
        }, {
            test: /\.(png|gif|jpg|jpeg|svg|xml|json|glb|kml|topojson|geojson|kmz)$/,
            use: [ 'url-loader' ]
        }]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: '../src/index.html'
        }),
        // Copy Cesium Assets, Widgets, and Workers to a static directory
        new CopywebpackPlugin([ { from: path.join(cesiumSource, cesiumWorkers), to: 'Workers' } ]),
        new CopywebpackPlugin([ { from: path.join(cesiumSource, 'Assets'), to: 'Assets' } ]),
        new CopywebpackPlugin([ { from: path.join(cesiumSource, 'Widgets'), to: 'Widgets' } ]),
        new webpack.DefinePlugin({
            // Define relative base path in cesium for loading assets
            CESIUM_BASE_URL: JSON.stringify('')
        })
    ],
    devServer: {
        contentBase: path.join(__dirname, "../dist")
    },
    amd: {
        // Enable webpack-friendly use of require in Cesium
        //告诉Cesium ，AMD webpack用于评估require语句的版本不符合标准toUrl函数
        toUrlUndefined: true
    },
    node: {
        // Resolve node module use of fs
        //解决了fs模块的某些第三方用法，该模块的目标是在节点环境而不是浏览器中使用
        fs: 'empty'
    },
    resolve: {
        alias: {
            // Cesium module name
            cesium: path.resolve(__dirname, cesiumSource)
        }
    },
};