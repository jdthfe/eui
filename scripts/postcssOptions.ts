// eslint-disable-next-line @typescript-eslint/no-triple-slash-reference
/// <reference path="./postcss-pxtorem.d.ts" />

import autoprefixer from 'autoprefixer';
import cssnano from 'cssnano';
import pxtorem from 'postcss-pxtorem';
import browsers from './.browserslistrc.js';

export default [
    //   postcssFlexbugsFixes,
    autoprefixer({
        browsers,
    }),
    pxtorem({
        // ! 二选一
        /**
         * 移动端 - REM
         */
        rootValue: 16,
        propList: ['*'],

        /**
         * PC 端 - PX
         */
        // propList: [],
    }),
    cssnano({
        preset: 'default',
    }),
];
