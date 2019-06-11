import webpack from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';
// import TsConfigPathsPlugin from 'tsconfig-paths-webpack-plugin';

import base from './webpack.config';
import webpackMerge from 'webpack-merge';
import { getProjectUrl } from '../helpers';

const config: webpack.Configuration = {
    entry: {
        index: getProjectUrl('site', 'index.tsx'),
    },
    // optimization: {
    //     splitChunks: {
    //         chunks: 'all',
    //     },
    // },
    // resolve: {
    //     plugins: [new TsConfigPathsPlugin({})],
    // },
    mode: 'production',
    output: {
        path: getProjectUrl('build'),
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Elephant UI',
            template: getProjectUrl('site', 'index.html'),
        }),
    ],
};
module.exports = webpackMerge(base, config);
