import React from 'react';
import { Portal, WingBlank } from '@src/index';
const Demo = () => {
    return (
        <WingBlank className="Portal">
            <Portal>
                <h1>Portal</h1>
                <h1>Portal</h1>
            </Portal>
            <Portal mountNode={document.querySelector('.none')!}>none</Portal>
        </WingBlank>
    );
};

export default Demo;
