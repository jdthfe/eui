// eslint-disable-next-line @typescript-eslint/no-triple-slash-reference
/// <reference path="../postcss-pxtorem.d.ts" />

import webpack from 'webpack';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import postcssOptions from '../postcssOptions';

function getStyleLoader(): webpack.RuleSetUse {
    return [
        MiniCssExtractPlugin.loader,
        'css-loader',
        {
            loader: 'postcss-loader',
            options: {
                plugins: () => postcssOptions,
            },
        },
        'sass-loader',
    ];
}

export default getStyleLoader;
