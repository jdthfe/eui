import React, { useState } from 'react';
import { MessageBox, Button } from '@src/index';
const Demo = () => {
    const [visible, setVisible] = useState(false);
    const [visible2, setVisible2] = useState(false);
    return (
        <div className="MessageBox">
            <Button theme="primary" onClick={() => setVisible(!visible)}>
                MessageBox
            </Button>
            <MessageBox
                time={200}
                title="Title"
                visible={visible}
                onClickCancel={() => {
                    setVisible(!visible);
                }}
                // multiLine
                buttons={[
                    { children: 'Button', theme: 'primary', rectangle: true },
                    { children: 'Button', ghost: true, rectangle: true, style: { color: '#666', border: 'none' } },
                ]}
            >
                children
            </MessageBox>
            <Button theme="primary" onClick={() => setVisible2(!visible2)}>
                MessageBox
            </Button>
            <MessageBox
                time={200}
                title="Title"
                visible={visible2}
                multiLine
                buttons={[
                    { children: 'Button', theme: 'primary' },
                    { children: 'Button', ghost: true, style: { color: '#666', border: 'none' } },
                ]}
            >
                children
            </MessageBox>
        </div>
    );
};

export default Demo;
