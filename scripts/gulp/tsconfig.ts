'use strict';

import fs from 'fs';
import { getProjectUrl } from '../helpers';
import { TsConfig } from 'gulp-typescript/release/types';
export default function() {
    let my: TsConfig = {};
    if (fs.existsSync(getProjectUrl('tsconfig.json'))) {
        my = require(getProjectUrl('tsconfig.json'));
    }
    return Object.assign(my.compilerOptions, {
        noUnusedParameters: true,
        noUnusedLocals: true,
        strictNullChecks: true,
        target: 'es6',
        jsx: 'preserve',
        moduleResolution: 'node',
        declaration: true,
        allowSyntheticDefaultImports: true,
    });
}
