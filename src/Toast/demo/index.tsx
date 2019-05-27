import React, { useState } from 'react';
import { Toast, Button, WhiteSpace, WingBlank } from '@src/index';
const Demo = () => {
    const [visible, setVisible] = useState(false);
    function changeVisible() {
        setVisible(true);
        setTimeout(() => {
            setVisible(false);
        }, 1500);
    }
    return (
        <WingBlank className="Toast">
            <h4>Dom</h4>
            <Button theme="primary" onClick={changeVisible}>
                Base
            </Button>
            <Toast visible={visible} time={200}>
                Base
            </Toast>
            <WhiteSpace />

            <h4>Method</h4>
            <Button
                theme="primary"
                onClick={() =>
                    Toast.normal({
                        children: 'Normal Toast',
                    })
                }
            >
                Normal
            </Button>
            <WhiteSpace />

            <Button
                theme="primary"
                onClick={() =>
                    Toast.success({
                        children: 'Successful Added',
                    })
                }
            >
                Success
            </Button>
            <WhiteSpace />

            <Button
                theme="primary"
                onClick={() =>
                    Toast.alert({
                        children: 'Failed Added',
                        onExitDone: () => {
                            console.log('alert done');
                        },
                        noCover: true,
                    })
                }
            >
                Alert | noCover
            </Button>
            <WhiteSpace />

            <Button
                theme="primary"
                onClick={() => {
                    Toast.loading({
                        onExitDone: () => {
                            console.log('loading done');
                        },
                    });
                    setTimeout(() => Toast.closeLoading(), 5000);
                }}
            >
                loading
            </Button>
            <WhiteSpace />

            <Button theme="primary" onClick={() => Toast.normal()}>
                null
            </Button>
            <WhiteSpace />
        </WingBlank>
    );
};

export default Demo;
