import webpack from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';
// import TsConfigPathsPlugin from 'tsconfig-paths-webpack-plugin';

import base from './webpack.config';
import webpackMerge from 'webpack-merge';
import { getProjectUrl } from '../helpers';

const config: webpack.Configuration = {
    entry: {
        example: getProjectUrl('site', 'index.tsx'),
    },
    // resolve: {
    //     plugins: [new TsConfigPathsPlugin({})],
    // },
    mode: 'production',
    output: {
        path: getProjectUrl('build'),
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'EDM',
            template: getProjectUrl('site', 'index.html'),
        }),
    ],
};
module.exports = webpackMerge(base, config);
