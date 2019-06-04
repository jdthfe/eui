declare type Language = 'en-US' | 'zh-CN';
declare type LanguageObj = { [k in Exclude<Language, 'en-US'>]: string };
declare interface ComponentIndex extends LanguageObj {
    name: string;
    type: string;
}

declare module 'react-syntax-highlighter/dist/esm/prism' {
    import SyntaxHighlighter from 'react-syntax-highlighter';
    export default SyntaxHighlighter;
}
declare module '!!raw-loader!*' {
    const contents: string;
    export = contents;
}

declare module '*.png' {
    const url: string;
    export = url;
}
