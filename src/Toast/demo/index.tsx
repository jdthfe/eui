import React, { Children, useEffect, useState } from 'react';
import { Toast, Button, WhiteSpace, WingBlank } from '@src/index';
import useToast from '../useToast';
const Demo = () => {
    const [visible, setVisible] = useState(false);

    function changeVisible() {
        setVisible(true);
        setTimeout(() => {
            setVisible(false);
        }, 1500);
    }

    // useToast
    const [useVisible1, setUseVisible1] = useState(false);
    const { Toast: Toast2 } = useToast();

    // useEffect(() => {
    //     setUseVisible1(true);
    //     setTimeout(() => {
    //         setUseVisible1(false);
    //     }, 1500);
    // }, []);

    function useToastFun() {
        setUseVisible1(true);
        setTimeout(() => {
            setUseVisible1(false);
        }, 1500);
        // setTimeout(() => {
        //     setUseVisible1(false);
        // }, 1500);
        // Toast2.model({
        //     visible: true,
        //     children: 'model toast2',
        //     onExitDone: () => {
        //         console.log('exit done toast2');
        //     },
        // });
    }

    function useToastModelFun() {
        Toast2.model({
            // visible: true,
            children: 'model toast2 test',
            onExitDone: () => {
                console.log('exit done toast2');
            },
            duration: 1500,
        });
    }

    return (
        <WingBlank className="Toast">
            <h4>UseToast</h4>
            <Toast2
                visible={useVisible1}
                // onEntryDone={() => {
                //     console.log('entry done');
                // }}
                onExitDone={() => {
                    console.log('exit done');
                }}
            >
                use Toast2
            </Toast2>
            <Button ghost onClick={useToastFun}>
                useToast
            </Button>
            <WhiteSpace />
            <Button ghost onClick={useToastModelFun}>
                useToast Model
            </Button>
            <WhiteSpace />

            <h4>Dom</h4>
            <Button ghost onClick={changeVisible}>
                Toast
            </Button>

            <Toast
                visible={visible}
                time={200}
                onExitDone={() => {
                    console.log('exit toast');
                }}
            >
                Toast
            </Toast>
            <WhiteSpace />

            <h4>Method</h4>
            <Button
                ghost
                onClick={() =>
                    Toast.model({
                        children: 'Model Toast',
                    })
                }
            >
                Model
            </Button>
            <WhiteSpace />

            <Button
                ghost
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
                ghost
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
                ghost
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

            <Button ghost onClick={() => Toast.model()}>
                null
            </Button>
            <WhiteSpace />
        </WingBlank>
    );
};

export default Demo;
