import React from 'react';
import { MessageBox, Button, WhiteSpace } from '@src/index';
const Demo = () => {
    return (
        <div className="MessageBox">
            <Button
                theme="primary"
                onClick={() =>
                    MessageBox.default({
                        title: 'title',
                        children: 'children',
                        buttons: [
                            {
                                children: 'left',
                                theme: 'primary',
                                rectangle: true,
                                onClick: () => {
                                    console.log('default');
                                    return true;
                                },
                            },
                            {
                                children: 'right',
                                ghost: true,
                                rectangle: true,
                                style: { color: '#666', border: 'none' },
                            },
                        ],
                    })
                }
            >
                Default
            </Button>
            <WhiteSpace />
            <Button
                theme="primary"
                onClick={() =>
                    MessageBox.alert({
                        confirmText: 'confirmText',
                        title: 'alert',
                        children: 'children',
                        confirmCallback: () => {
                            // console.log('confirmCallback');
                            MessageBox.default({
                                title: 'title',
                                children: 'children',
                                buttons: [
                                    { children: 'Button', theme: 'primary', rectangle: true },
                                    {
                                        children: 'Button',
                                        ghost: true,
                                        rectangle: true,
                                        style: { color: '#666', border: 'none' },
                                    },
                                ],
                            });
                            return true;
                        },
                    })
                }
            >
                Alert
            </Button>
            <WhiteSpace />
            <Button theme="primary" onClick={() => MessageBox.confirm({ title: 'Confirm', children: 'children' })}>
                Confirm
            </Button>
            {/* <MessageBox
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
            </MessageBox> */}
        </div>
    );
};

export default Demo;
