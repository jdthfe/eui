import React, { useState } from 'react';
import { WingBlank, Button } from '@src/index';
import usePortal from '../index3';
const Demo = () => {
    const [div, setDiv] = useState<HTMLElement | null>(null);
    const [isOpen, openPortal, closePortal, Portal] = usePortal({
        bindTo: div,
    });

    const { Portal: Portal2 } = usePortal();
    // return <Portal>test</Portal>;
    return (
        <WingBlank className="Portal">
            <div ref={ref => setDiv(ref)} />
            <Button
                ghost
                onClick={() => {
                    openPortal();
                }}
            >
                openPortal
            </Button>
            <Button
                ghost
                onClick={() => {
                    closePortal();
                }}
            >
                closePortal
            </Button>
            {isOpen && (
                <Portal>
                    <h1>Portal 1</h1>
                    <h1>Portal 1</h1>
                </Portal>
            )}
            <Portal>
                <h1>Portal div</h1>
            </Portal>
            {/* <Portal mountNode={document.querySelector('.none')}>
                <h1>Portal 3</h1>
            </Portal> */}
            <Portal2>
                <h2>Portal2</h2>
            </Portal2>
        </WingBlank>
    );
};

export default Demo;
