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
import babelrc from '../babelrc.js';
import { getProjectUrl } from '../helpers';
import postcssOptions from '../postcssOptions';

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
    const title = modules !== false ? 'lib: [tsx ] -> [ js ]' : 'es : [tsx ] -> [ js ]';
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
    console.log();
    console.log('Convert Ts to Dts By Typescript...');
    console.log();
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
    console.log();
    console.log('Convert Ts to Dts By Typescript...');
    console.log();
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
    const title = modules !== false ? 'lib: [scss] -> [scss]' : 'es : [scss] -> [scss]';
    return new Promise((res, rej) => {
        src(scssSource)
            .pipe(debug({ title }))
            .on('error', rej)
            .pipe(dest(modules !== false ? libDir : esDir))
            .on('end', res);
    });
}

function convertScssToCss(modules?: boolean) {
    const title = modules !== false ? 'lib: [scss] -> [ css]' : 'es : [scss] -> [ css]';
    return new Promise((res, rej) => {
        src(scssSource)
            .pipe(debug({ title }))
            .pipe(scss())
            .pipe(postcss(postcssOptions))
            .on('error', rej)
            .pipe(dest(modules !== false ? libDir : esDir))
            .on('end', res);
    });
}

const styleIndexSource = [getProjectUrl('src/**/style/index.tsx')];
function buildCssJs(modules?: boolean) {
    const title = modules !== false ? 'lib: [tsx ] -> [ js ]' : 'es : [tsx ] -> [ js ]';
    return new Promise((res, rej) => {
        src(styleIndexSource)
            .pipe(debug({ title }))
            .pipe(replace(/\/style\/?'/g, "/style/css'"))
            .pipe(replace(/\.scss/g, '.css'))
            .pipe(babel(babelrc(modules)))
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
