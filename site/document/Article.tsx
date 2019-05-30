import React, { Fragment } from 'react';
import ReactMarkdown from 'react-markdown';
import SyntaxHighlighter from 'react-syntax-highlighter/dist/esm/prism';
import { base16AteliersulphurpoolLight } from 'react-syntax-highlighter/dist/styles/prism';

import { getDocs } from '../_util';
import { getLanguage } from '../_util/language';

function splitReadme(readme: string = '') {
    return [...readme.split('## Demo')];
}
interface ContainerProps {
    item: ComponentIndex;
}

const Article = (props: ContainerProps) => {
    const { item } = props,
        docs = getDocs(item),
        { demoSource } = docs,
        lang = getLanguage(),
        readme = docs[`readme${lang !== 'en-US' ? '.' + lang : ''}`],
        [demoBefore, demoAfter] = splitReadme(readme);

    return (
        <article className="document-article">
            <div className="markdown-body">
                <ReactMarkdown source={`# ${item.name} ${lang !== 'en-US' ? item[lang] : ''}\n${demoBefore}`} />
                {demoAfter ? (
                    <Fragment>
                        <div className="markdown-body-code">
                            <SyntaxHighlighter style={base16AteliersulphurpoolLight} language="jsx">
                                {demoSource}
                            </SyntaxHighlighter>
                        </div>
                        <ReactMarkdown source={demoAfter} />
                    </Fragment>
                ) : null}
            </div>
        </article>
    );
};

export default Article;
