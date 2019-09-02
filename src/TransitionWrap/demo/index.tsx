import React, { useState } from 'react';
import { TransitionWrap, Button, WingBlank, WhiteSpace } from '@src/index';
import './index.scss';
const Demo = () => {
    const [visible, setVisible] = useState(false);
    const [visible2, setVisible2] = useState(false);
    return (
        <WingBlank className="TransitionWrap">
            <Button ghost onClick={() => setVisible(!visible)}>
                keepOnExit = false
            </Button>
            <WhiteSpace />
            <Button ghost onClick={() => setVisible2(!visible2)}>
                keepOnExit = true
            </Button>
            <TransitionWrap
                onExitDone={() => console.log('hello')}
                transitionClassName="hello"
                visible={visible}
                time={500}
            >
                <h1 className="hello">hello</h1>
            </TransitionWrap>
            <TransitionWrap transitionClassName="world" keepOnExit visible={visible2} time={500}>
                <h1 className="world">world</h1>
            </TransitionWrap>
        </WingBlank>
    );
};

export default Demo;
