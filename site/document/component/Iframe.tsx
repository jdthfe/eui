import React from 'react';
// import instanceTop from '../../assets/instance-top.png';

interface IframeProps {
    src: string;
    className: string;
    offsetTop: number;
}
const Iframe = (props: IframeProps) => {
    const { src = '#/instance', className, offsetTop } = props;
    const iframe = (
        // 增加 key，可以实现在 document 页面中，后退时整体后退
        // <div key={src} className={`document-iframe ${className}`}>
        <div className={`document-iframe ${className}`} style={{ paddingTop: offsetTop }}>
            {/* <img src="/assets/instance-top.png" alt="instanceTop" /> */}
            <iframe id="iframe" src={src} width="375" height="750" />
            {/* <iframe id="iframe" src={src} width="375" height="667" /> */}
        </div>
    );
    return iframe;
};

export default Iframe;
