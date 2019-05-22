import React from 'react';
import { Portal } from '@src/index';
const Demo = () => {
    return (
        <div className="Portal">
            <Portal>
                <h1>Portal</h1>
                <h1>Portal</h1>
            </Portal>
            <Portal mountNode={document.querySelector('.none')!}>none</Portal>
        </div>
    );
};

export default Demo;
