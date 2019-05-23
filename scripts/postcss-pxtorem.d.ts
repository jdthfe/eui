// import postcss from 'postcss';

declare module 'postcss-pxtorem' {
    const fn: (obj: { rootValue: number; propWhiteList: [string] }) => any;
    export default fn;
}
