const cpt = process.argv.pop();
const all = cpt === '--runInBand' || cpt === '-u' ? true : false;
const dir = all ? '**' : `${cpt}/**`;
const collectCoverageFrom = all
    ? ['src/*/*.tsx', 'src/index.tsx', 'src/*/demo/*.tsx', '!src/style/*.tsx', '!**/**/PropsType.tsx']
    : [`src/${cpt}/*.tsx`, `src/${cpt}/demo/*.tsx`, '!**/**/PropsType.tsx'];
const coverageDirectory = all ? 'coverage' : `src/${cpt}/__tests__/coverage`;
var config = {
    collectCoverage: true,
    collectCoverageFrom,
    coverageDirectory,
    coverageReporters: ['text', 'lcov'],
    setupFiles: ['./scripts/tests/setup.js'],
    reporters: ['default'],

    moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],
    moduleDirectories: ['node_modules'],

    // globals: {
    //     'ts-jest': {
    //         tsConfig: 'tsconfig.json',
    //         // diagnostics: {
    //         // ignoreCodes: [2305],
    //         // },
    //     },
    // },
    // preset: 'ts-jest',

    transform: {
        '^.+\\.tsx?$': 'babel-jest',
        // '^.+test\\.(js|jsx)$': 'babel-jest',
        // '^.+\\.(ts|tsx)$': 'ts-jest',
    },
    testMatch: [`<rootDir>/src/${dir}/__tests__/**/*.test.(js|jsx|ts|tsx)`],

    moduleNameMapper: {
        '@src/(.*)$': '<rootDir>/src/$1',
        '@tests/(.*)$': '<rootDir>/scripts/tests/$1',
        '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
            '<rootDir>/scripts/tests/__mocks__/file-mock.js',
        '\\.(css|less|sass|scss)$': '<rootDir>/scripts/tests/__mocks__/object-mock.js',
    },
};
module.exports = config;
