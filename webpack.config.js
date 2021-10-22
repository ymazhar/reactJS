const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const ESLintPlugin = require('eslint-webpack-plugin');
const CopyWebpackPlugin = require( 'copy-webpack-plugin' );
const path = require('path');


const getStyleLoaders = () => {
    return [
        process.env.NODE_ENV ===  'production' ? MiniCssExtractPlugin.loader : 'style-loader',
        'css-loader'
    ]
}
const getPlugins = () => {
    const plugins = [
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: path.resolve(__dirname, 'src/index.html'),
            minify: 'false'
        }),
        new ESLintPlugin()
    ];

    const prodPlugins = [
        new MiniCssExtractPlugin({
            filename: 'build/main-[hash:7].css'
        }),
    ]

    return process.env.NODE_ENV ===  'production' ? [...prodPlugins, ...plugins] : plugins;
}

module.exports = {
    // webpack optimization mode
    mode: ( 'development' === process.env.NODE_ENV ? 'development' : 'production' ),
    // entry files
    entry: 'development' === process.env.NODE_ENV ? [
        './src/index.dev.js', // in development
    ] : [
        './src/index.prod.js', // in production
    ],
    // output files and chunks
    output: {
        path: path.resolve( __dirname, 'dist' ),
        filename: 'build/[name].js',
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
                            name: '[name]-[sha1:hash:7].[ext]',
                            esModule: false,
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
                use: [...getStyleLoaders() ,
                    {
                        loader: 'resolve-url-loader',
                        options: {
                            sourceMap: true,
                            removeCR: true
                        }
                    },
                ],
            },
            // Loading sass/scss
            {
                test: /\.((c|sa|sc)ss)$/i,
                use: [...getStyleLoaders(), {
                    loader: 'resolve-url-loader',
                    options: {
                        sourceMap: true,
                        removeCR: true
                    }
                }, {
                    loader: 'sass-loader',
                    options: {
                        sourceMap: true,
                    }
                }],
            },
        ]
    },
    resolve: {
        // расширения файлов
        extensions: [ '.js', '.jsx', '.scss' ],
    },
    // webpack optimizations
    optimization: {
        splitChunks: {
            cacheGroups: {
            default: false,
                    vendors: false,

                    vendor: {
                    chunks: 'all', // both : consider sync + async chunks for evaluation
                        name: 'vendor', // name of chunk file
                        test: /node_modules/, // test regular expression
                }
            }
        }
    },
    plugins: getPlugins(),
        devtool: 'source-map',
        devServer: {
        historyApiFallback: true,
            open: true
    }
}