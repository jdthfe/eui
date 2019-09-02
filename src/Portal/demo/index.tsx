import React, { useState } from 'react';
import { Portal, WingBlank } from '@src/index';
const Demo = () => {
    const [div, setDiv] = useState<HTMLDivElement | null>(null);
    return (
        <WingBlank className="Portal">
            <div ref={ref => setDiv(ref)} />
            <Portal>
                <h1>Portal 1</h1>
                <h1>Portal 1</h1>
            </Portal>
            <Portal mountNode={div}>
                <h1>Portal 2</h1>
            </Portal>
            <Portal mountNode={document.querySelector('.none')}>
                <h1>Portal 3</h1>
            </Portal>
        </WingBlank>
    );
};

export default Demo;
