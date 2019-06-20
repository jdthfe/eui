import webpack from 'webpack';

import base from './webpack.config';
import webpackMerge from 'webpack-merge';
import { getProjectUrl } from '../helpers';

const config: webpack.Configuration = {
    entry: {
        index: ['./src/index.tsx', './src/scss.tsx'],
    },
    mode: 'production',
    output: {
        path: getProjectUrl('compiled', 'dist'),
        library: 'eui',
        libraryTarget: 'umd',
        globalObject: 'this',
    },
    externals: {
        react: {
            commonjs: 'react',
            commonjs2: 'react',
            amd: 'react',
            root: 'React',
        },
        'react-dom': {
            commonjs: 'react-dom',
            commonjs2: 'react-dom',
            amd: 'react-dom',
            root: 'ReactDOM',
        },
    },
};
module.exports = webpackMerge(base, config);
