declare interface DirectoryStructureItem {
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
