import React from 'react';

interface IframeProps {
    src: string;
    className: string;
}
const Iframe = (props: IframeProps) => {
    const { src, className } = props;
    return (
        <div className={`document-iframe ${className}`}>
            <iframe id="iframe" src={src || '#/instance'} width="375" height="667" />
        </div>
    );
};

export default Iframe;
