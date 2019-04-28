export default (modules?: boolean) => ({
    presets: [['@babel/preset-env', { modules }], '@babel/preset-react', '@babel/preset-typescript'] as string[],
    plugins: [
        '@babel/plugin-transform-runtime',
        '@babel/plugin-proposal-class-properties',
        '@babel/plugin-proposal-object-rest-spread',
    ],
});
