const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const ESLintPlugin = require('eslint-webpack-plugin');
module.exports = (env = {}) => {
    const { mode = 'development' } = env;
    const isProd = mode === 'production';

    const getStyleLoaders = () => {
        return [
            isProd ? MiniCssExtractPlugin.loader : 'style-loader',
            'css-loader'
        ]
    }
    const getPlugins = () => {
        const plugins = [
            new HtmlWebpackPlugin({
                template: "public/index.html",
                inject: 'body'
            }),
            new ESLintPlugin()
        ];

        const prodPlugins = [
            new MiniCssExtractPlugin({
                filename: 'main-[hash:7].css'
            })
        ]

        return isProd ? [...prodPlugins, ...plugins] : plugins;
    }

    return {
        mode,
        output: {
            filename: isProd ? 'main-[hash:7].js' : undefined,
            clean: true,
        },
        module: {
            rules: [
                {
                    test: /\.js$/,
                    exclude: /node_modules/,
                    loader: 'babel-loader'
                },
                // Loading images
                {
                    test: /\.(png|jpe?g|gif)$/i,
                    use: [
                        {
                            loader: 'file-loader',
                            options: {
                                outputPath: 'images',
                                name: '[name]-[sha1:hash:7].[ext]'
                            }
                        }
                    ]
                },
                // Loading fonts
                {
                    test: /\.(otf|ttf|eot|woff|woff2)$/i,
                    use: [
                        {
                            loader: 'file-loader',
                            options: {
                                outputPath: 'fonts',
                                name: '[name].[ext]'
                            }
                        }
                    ]
                },
                // Loading css
                {
                    test: /\.(css)$/i,
                    use: getStyleLoaders(),
                },
                // Loading sass/scss
                {
                    test: /\.((c|sa|sc)ss)$/i,
                    use: [...getStyleLoaders(), 'sass-loader'],
                },
            ]
        },
        plugins: getPlugins(),
        devServer: {
            open: true
        }
    }
}