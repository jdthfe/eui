// eslint-disable-next-line @typescript-eslint/no-triple-slash-reference
/// <reference path="../postcss-pxtorem.d.ts" />
import { series, src, dest } from 'gulp';
import { spawn } from 'child_process';

import replace from 'gulp-replace';
import rename from 'gulp-rename';
import scss from 'gulp-sass';
import process from 'process';
import rimraf from 'rimraf';
import babel from 'gulp-babel';
import debug from 'gulp-debug';
import postcss from 'gulp-postcss';
import autoprefixer from 'autoprefixer';
import cssnano from 'cssnano';
import pxtorem from 'postcss-pxtorem';

import babelrc from '../babelrc';
import { getProjectUrl } from '../helpers';

const libDir = getProjectUrl('compiled', 'lib');
const esDir = getProjectUrl('compiled', 'es');

function clean(dir: string) {
    rimraf.sync(dir);
}

function swallowError(error: any) {
    // If you want details of the error in the console
    console.error(error.toString());
    // todo 完善删除
    clean(esDir);
    clean(libDir);
    throw error;
}

const source = [
    getProjectUrl('src/*/*.tsx'),
    getProjectUrl('src/*/style/*.tsx'),
    // getProjectUrl('src/*.tsx'),
    // getProjectUrl('typings/**/*.ts'),
];
function convertTstoJs(output: string, modules?: boolean) {
    const title = modules !== false ? 'ts -> lib' : 'ts -> es';
    return new Promise((res, rej) => {
        src([getProjectUrl('src/index.tsx')])
            .pipe(replace(/false &&/g, modules !== false ? '' : 'false &&'))
            .pipe(src(source))
            .pipe(debug({ title }))
            .pipe(babel(babelrc(modules)))
            .on('error', rej)
            .pipe(dest(output))
            .on('end', res);
    });
}
function convertTstoDts() {
    console.log('[  e  s  ] convert Ts to Dts By Typescript...');
    const tsc = spawn('tsc', ['-pretty', '--emitDeclarationOnly', '-p', '../../tsconfig.dts.json'], {
        stdio: 'inherit',
        shell: process.platform === 'win32',
    });
    return new Promise((res, rej) => {
        tsc.on('exit', code => {
            if (!code) {
                res();
            } else {
                console.log(code);
                rej(code);
            }
        });
    });
}

function copyDts() {
    console.log('[ l i b  ] convert Ts to Dts By Typescript...');
    const dtsFile = [getProjectUrl('compiled/es/**/*.d.ts')];
    return new Promise((res, rej) => {
        src(dtsFile)
            .on('error', rej)
            .pipe(dest(libDir))
            .on('end', res);
    });
}

const scssSource = [getProjectUrl('src/**/style/*.scss')];
function copyScss(modules?: boolean) {
    const title = modules !== false ? 'scss -> lib' : 'scss -> es';
    return new Promise((res, rej) => {
        src(scssSource)
            .pipe(debug({ title }))
            .on('error', rej)
            .pipe(dest(modules !== false ? libDir : esDir))
            .on('end', res);
    });
}

function convertScssToCss(modules?: boolean) {
    const title = modules !== false ? 'css -> lib' : 'css -> es';
    return new Promise((res, rej) => {
        src(scssSource)
            .pipe(debug({ title }))
            .pipe(scss())
            .pipe(
                postcss([
                    //   postcssFlexbugsFixes,
                    autoprefixer({
                        browsers: ['last 2 versions', 'Firefox ESR', '> 1%', 'ie >= 9', 'iOS >= 8', 'Android >= 4'],
                    }),
                    pxtorem({
                        // todo change value
                        rootValue: 16,
                        propWhiteList: ['*'],
                    }),
                    cssnano({
                        preset: 'default',
                    }),
                ]),
            )
            .on('error', rej)
            .pipe(dest(modules !== false ? libDir : esDir))
            .on('end', res);
    });
}

const styleIndexSource = [getProjectUrl('src/**/style/index.tsx')];
function buildCssJs(modules?: boolean) {
    return new Promise((res, rej) => {
        src(styleIndexSource)
            .pipe(replace(/\/style\/?'/g, "/style/css'"))
            .pipe(replace(/\.scss/g, '.css'))
            .pipe(
                rename({
                    basename: 'css',
                    extname: '.js',
                }),
            )
            .on('error', rej)
            .pipe(dest(modules !== false ? libDir : esDir))
            .on('end', res);
    });
}

function compile(modules?: boolean) {
    clean(modules !== false ? libDir : esDir);
    const dir = modules !== false ? libDir : esDir;
    return Promise.all([
        copyScss(modules),
        convertScssToCss(modules),
        buildCssJs(modules),
        convertTstoJs(dir, modules),
        modules !== false ? copyDts() : convertTstoDts(),
    ]).catch(err => {
        console.log(err);
        swallowError(err);
    });
}

function compileWithEs() {
    return compile(false);
}
function compileWithCommon() {
    return compile();
}

exports.compile = series(compileWithEs, compileWithCommon);
