import React, { useState } from 'react';
import { Cover, Button, WhiteSpace, WingBlank, Portal } from '@src/index';
const Demo = () => {
    const [visible, setVisible] = useState(false);
    function changeVisible() {
        setVisible(!visible);
    }
    const [visible2, setVisible2] = useState(false);
    function changeVisible2() {
        setVisible2(!visible2);
    }
    const [visible3, setVisible3] = useState(false);
    function changeVisible3() {
        setVisible3(!visible3);
    }
    return (
        <WingBlank className="Cover">
            <h4>Cover</h4>
            <Button ghost onClick={changeVisible}>
                Cover
            </Button>
            {visible ? <Cover onClick={changeVisible} /> : null}
            <WhiteSpace />
            <Button ghost onClick={changeVisible2}>
                Cover | transparent
            </Button>
            {visible2 ? (
                <Cover
                    transparent
                    onClick={() => {
                        alert('You clicked on the transparent Cover！');
                        changeVisible2();
                    }}
                />
            ) : null}
            <WhiteSpace />

            <h4>Cover.Transition</h4>
            <Button ghost onClick={changeVisible3}>
                Cover.Transition | Portal
            </Button>
            <Portal>
                <Cover.Transition time={200} onClick={changeVisible3} visible={visible3} />
            </Portal>
        </WingBlank>
    );
};

export default Demo;
