import webpack from 'webpack';

import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import autoprefixer from 'autoprefixer';
import cssnano from 'cssnano';

function getStyleLoader(): webpack.RuleSetUse {
    return [
        MiniCssExtractPlugin.loader,
        'css-loader',
        {
            loader: 'postcss-loader',
            options: {
                plugins: () => [
                    //   postcssFlexbugsFixes,
                    autoprefixer({
                        browsers: ['last 2 versions', 'Firefox ESR', '> 1%', 'ie >= 9', 'iOS >= 8', 'Android >= 4'],
                    }),
                    cssnano({
                        preset: 'default',
                    }),
                ],
            },
        },
        'sass-loader',
    ];
}

export default getStyleLoader;
