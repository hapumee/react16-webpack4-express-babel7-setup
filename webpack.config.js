const nodeExternals = require('webpack-node-externals');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: [
        './src/server/index.js', // 서버 구동의 시작점
        './src/client/index.js' // 번들링을 시작할 entry point 지정
    ],
    target: 'web', // [ISSUE] node_modules are not excluded when executing 'webpack-dev-server'
    externals: [nodeExternals()], // [ISSUE] node_modules are not excluded when executing 'webpack-dev-server'
    module: { // 어떤 로더를 사용하여 파일을 읽어오는지 설정
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                }
            },
            {
                test: /\.css$/,
                use: {
                    loader: 'css-loader'
                }
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './public/index.html' // HTML 로 번들링하도록 설정
        })
    ],
    devServer: { // 개발 모드일 때 적용되는 설정. localhost:3000 URL 이 새 창으로 뜬다.
        host: 'localhost',
        port: 3000,
        open: true
    }
};