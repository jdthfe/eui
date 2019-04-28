import React, { useState } from 'react';
import { TransitionWrap, Button } from '@src/index';
import './index.scss';
const Demo = () => {
    const [visible, setvisible] = useState(false);
    return (
        <div className="TransitionWrap">
            <Button onClick={() => setvisible(!visible)}>click to {visible ? 'hide' : 'show'} text</Button>
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
        </div>
    );
};

export default Demo;
