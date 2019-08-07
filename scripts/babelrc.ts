export default (modules?: boolean) => ({
    presets: [
        [
            '@babel/preset-env',
            {
                modules,
                corejs: 2,
                useBuiltIns: 'usage',
                targets: {
                    browsers: ['ie >= 11'],
                },
            },
        ],
        '@babel/preset-react',
        '@babel/preset-typescript',
    ] as string[],
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
    ] as string[],
});
