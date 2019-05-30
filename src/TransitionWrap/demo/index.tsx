import React, { useState } from 'react';
import { TransitionWrap, Button, WingBlank } from '@src/index';
import './index.scss';
const Demo = () => {
    const [visible, setvisible] = useState(false);
    return (
        <WingBlank className="TransitionWrap">
            <Button theme="primary" onClick={() => setvisible(!visible)}>
                click to {visible ? 'hide' : 'show'} text
            </Button>
            <TransitionWrap
                onExitDone={() => console.log('hello')}
                transitionClassName="hello"
                visible={visible}
                time={500}
            >
                <h1 className="hello">hello</h1>
            </TransitionWrap>
            <TransitionWrap transitionClassName="world" keepOnExit visible={visible} time={500}>
                <h1 className="world">world</h1>
            </TransitionWrap>
        </WingBlank>
    );
};

export default Demo;
