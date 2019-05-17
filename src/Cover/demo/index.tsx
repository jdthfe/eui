import React, { useState } from 'react';
import { Cover, Button, WhiteSpace } from '@src/index';
const Demo = () => {
    const [visible, setVisible] = useState(false);
    const [visible2, setVisible2] = useState(false);
    return (
        <div className="Cover">
            <Button
                theme="primary"
                onClick={() => {
                    setVisible(!visible);
                }}
            >
                Cover
            </Button>
            <WhiteSpace />
            <Button
                theme="primary"
                onClick={() => {
                    setVisible2(!visible2);
                }}
            >
                Cover Transparent
            </Button>

            <Cover
                onClick={() => {
                    setVisible(!visible);
                }}
                time={200}
                visible={visible}
            />
            <Cover
                onClick={() => {
                    setVisible2(!visible2);
                }}
                visible={visible2}
                transparent
            />
        </div>
    );
};

export default Demo;
