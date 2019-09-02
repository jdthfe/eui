import React, { useState } from 'react';
import { MessageBox, Button, WhiteSpace, WingBlank, Icon } from '@src/index';
import { _util } from '@src/index';
const { Variable } = _util;

const Demo = () => {
    const [visible, setVisible] = useState(false);
    function changeVisible() {
        setVisible(!visible);
    }
    return (
        <WingBlank className="MessageBox">
            <h4>Dom</h4>
            <Button onClick={changeVisible} ghost>
                MessageBox
            </Button>
            <MessageBox
                title="title"
                visible={visible}
                time={200}
                coverProps={{ onClick: changeVisible }}
                onClickCloseIcon={changeVisible}
                buttons={[
                    { rectangle: true, theme: 'primary', children: 'right', onClick: changeVisible },
                    { rectangle: true, theme: 'secondary', children: 'left' },
                ]}
            >
                <Icon fill="lightgreen" style={{ width: '100px', height: '100px' }} value="successful" />
                <br />
                Children
            </MessageBox>
            <WhiteSpace />
            <h4>Method</h4>
            <Button
                ghost
                onClick={() =>
                    MessageBox.model({
                        onClickCloseIcon: true,
                        onClickCover: false,
                        title: 'title',
                        children: 'children',
                        buttons: [
                            {
                                children: 'right',
                                theme: 'primary',
                                rectangle: true,
                                onClick: () => {
                                    console.log('right');
                                    return false;
                                },
                            },
                            {
                                children: 'left',
                                ghost: true,
                                rectangle: true,
                                style: { color: '#666', border: 'none' },
                            },
                        ],
                    })
                }
            >
                Model | noCover
            </Button>
            <WhiteSpace />
            <Button
                ghost
                onClick={() =>
                    MessageBox.alert({
                        confirmChildren: 'Alert | MultiLineButtons',
                        title: 'Alert',
                        children: 'children',
                        confirmCallback: () => {
                            MessageBox.alert({
                                multiLineButtons: true,
                                title: 'MultiLineButtons',
                                children: 'children',
                            });
                            return false;
                        },
                    })
                }
            >
                Alert
            </Button>
            <WhiteSpace />
            <Button
                ghost
                onClick={() =>
                    MessageBox.confirm({
                        onClickCover: () => false,
                        title: 'Confirm',
                        children: 'children',
                        confirmCallback: () => console.log('confirmCallback'),
                    })
                }
            >
                Confirm
            </Button>
            <WhiteSpace />
            <Button
                ghost
                onClick={() =>
                    MessageBox.confirm({
                        multiLineButtons: true,
                        title: 'Confirm',
                        children: 'children',
                        transitionClassName: Variable.transitionZoom,
                    })
                }
            >
                Confirm | multiLineButtons
            </Button>
        </WingBlank>
    );
};

export default Demo;
