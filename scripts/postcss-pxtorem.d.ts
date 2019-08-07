// import postcss from 'postcss';

declare module 'postcss-pxtorem' {
    const fn: (obj: { rootValue?: number; propList?: string[] }) => any;
    export default fn;
}
