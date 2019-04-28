import webpack from 'webpack';
import ForkTsCheckerWebpackPlugin from 'fork-ts-checker-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import StyleLintPluginfrom from 'stylelint-webpack-plugin';

import getStyleLoader from './getStyleLoader';
import babelrc from '../babelrc';
import { getProjectUrl } from '../helpers';

interface EnvMap {
    build: string;
    dist: string;
    development: string;
    [key: string]: string;
}
const devMode: boolean = (process.env.NODE_ENV as keyof EnvMap) === 'development';

const tsconfig = getProjectUrl(`tsconfig.${process.env.NODE_ENV === 'dist' ? 'dts.' : ''}json`);

const config: webpack.Configuration = {
    resolve: {
        extensions: ['.js', '.jsx', '.ts', '.tsx', '.scss'],
        alias: {
            '@src': getProjectUrl('src'),
            '@tests': getProjectUrl('scripts', 'tests'),
        },
    },
    devtool: devMode ? 'cheap-module-eval-source-map' : 'cheap-module-source-map',
    module: {
        rules: [
            {
                test: /\.(j|t)sx?$/,
                exclude: /(node_modules)/,
                use: [
                    {
                        loader: 'babel-loader',
                        options: {
                            ...babelrc(),
                        },
                    },
                    {
                        loader: 'eslint-loader',
                        options: {
                            configFile: getProjectUrl('.eslintrc.js'),
                        },
                    },
                ],
            },
            {
                test: /\.svg$/,
                loader: 'svg-sprite-loader',
            },
            {
                test: /\.s?([ac])ss$/,
                exclude: /(node_modules)/,
                use: getStyleLoader(),
            },
        ],
    },

    plugins: [
        new StyleLintPluginfrom({
            configFile: getProjectUrl('stylelint.config.js'),
            context: getProjectUrl(),
            files: ['**/*.scss'],
            failOnError: false,
            emitErrors: true,
            syntax: 'scss',
            quiet: false,
        }),
        // 检查代码中的类型错误
        new ForkTsCheckerWebpackPlugin({
            tsconfig,
        }),
        new MiniCssExtractPlugin({
            filename: '[name].css',
            chunkFilename: '[id].css',
            // filename: devMode ? "[name].css" : "[name].[hash].css",
            // chunkFilename: devMode ? "[id].css" : "[id].[hash].css"
        }),
    ],
};
export default config;
