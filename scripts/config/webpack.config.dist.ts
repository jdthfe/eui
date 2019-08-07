import webpack from 'webpack';

import base from './webpack.config';
import webpackMerge from 'webpack-merge';
import { getProjectUrl } from '../helpers';

const config: webpack.Configuration = {
    entry: {
        index: ['./src/index.tsx', './src/scss.tsx'],
    },
    mode: 'production',
    stats: {
        colors: true, //增加控制台颜色开关stats
        modules: false, // 不增加内置模块信息
        children: false, // 不增加子级信息 If you are using ts-loader, setting this to true will make TypeScript errors show up during build.
        chunks: false, // 允许较少的输出
        chunkModules: false, // 不将内置模块的信息加到包信息
    },
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
