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
        // todo change value
        // rootValue: 16,
        /**
         * [*]  转换
         * [ ]  不转换
         */
        propList: [],
    }),
    cssnano({
        preset: 'default',
    }),
];
