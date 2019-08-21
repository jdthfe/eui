const browsers = require('./.browserslistrc.js');

module.exports = modules => ({
    presets: [
        [
            '@babel/preset-env',
            {
                modules,
                corejs: 2,
                useBuiltIns: 'usage',
                targets: {
                    browsers,
                },
            },
        ],
        '@babel/preset-react',
        '@babel/preset-typescript',
    ],
    plugins: [
        [
            '@babel/plugin-transform-runtime',
            {
                corejs: 2,
                helpers: true,
                regenerator: true,
                useESModules: modules,
            },
        ],
        '@babel/plugin-proposal-class-properties',
        '@babel/plugin-proposal-object-rest-spread',
    ],
});
