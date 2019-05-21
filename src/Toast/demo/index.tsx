import React from 'react';
import { Toast, Button, WhiteSpace } from '@src/index';
const Demo = () => {
    // const [visible, setVisible] = useState(false);
    return (
        <div className="Toast">
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
                    setTimeout(() => Toast.close(), 5000);
                }}
            >
                loading
            </Button>
            <WhiteSpace />
            <Button theme="primary" onClick={() => Toast.normal()}>
                null
            </Button>
            <WhiteSpace />
        </div>
    );
};

export default Demo;
