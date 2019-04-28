import React, { Fragment } from 'react';
import ReactMarkdown from 'react-markdown';
import SyntaxHighlighter from 'react-syntax-highlighter/dist/esm/prism';
import { base16AteliersulphurpoolLight } from 'react-syntax-highlighter/dist/styles/prism';

import { getComponent } from '../until/structure';

function splitReadme(readme: string = '') {
    return [...readme.split('## Demo')];
}
interface ContainerProps {
    item: DirectoryStructureItem;
}

const Article = (props: ContainerProps) => {
    const { item } = props;
    const { demoSource, propsSource, readme } = getComponent(item);

    const [demoBefore, demoAfter] = splitReadme(readme);

    return (
        <article className="document-article">
            <div className="markdown-body">
                <ReactMarkdown source={demoBefore} />
                {demoAfter ? (
                    <Fragment>
                        <SyntaxHighlighter style={base16AteliersulphurpoolLight} language="jsx">
                            {demoSource}
                        </SyntaxHighlighter>
                        <ReactMarkdown source={demoAfter} />
                        {propsSource}
                    </Fragment>
                ) : null}
            </div>
        </article>
    );
};

export default Article;
