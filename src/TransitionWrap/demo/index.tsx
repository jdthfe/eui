import React, { useState } from 'react';
import { Button, WingBlank, WhiteSpace } from '@src/index';
import usePortal from '../../Portal/index3';
import TransitionWrap from '../index3';
import './index.scss';
const Demo = () => {
    const { Portal } = usePortal();
    const [visible, setVisible] = useState(true);
    const [visible2, setVisible2] = useState(false);
    return (
        <WingBlank className="TransitionWrap">
            <Button ghost onClick={() => setVisible(!visible)}>
                keepOnExit = false
            </Button>
            <WhiteSpace />
            {/* <Button ghost onClick={() => setVisible2(!visible2)}>
                keepOnExit = true
            </Button> */}
            {/* <TransitionWrap
                onExitDone={() => console.log('hello')}
                transitionClassName="hello"
                visible={visible}
                time={500}
            >
                <h1 className="hello">hello</h1>
            </TransitionWrap> */}
            <Portal>
                <TransitionWrap
                    onExitDone={() => console.log('this is exit function')}
                    onEntryDone={() => console.log('this is entry function')}
                    transitionClassName="hello"
                    visible={visible}
                    time={500}
                >
                    <h1 className="hello">hello</h1>
                </TransitionWrap>
            </Portal>

            {/* <TransitionWrap transitionClassName="world" keepOnExit visible={visible2} time={500}>
                <h1 className="world">world</h1>
            </TransitionWrap> */}
        </WingBlank>
    );
};

export default Demo;
