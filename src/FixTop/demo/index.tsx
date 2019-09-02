import React, { useState } from 'react';
import { FixTop, Icon } from '@src/index';
const Demo = () => {
    const [visible, setVisible] = useState(true);
    const clickFun = () => {
        console.log('onClick');
        setVisible(false);
    };
    const leftIcon = <Icon fill="#F00" value="close" />;
    const closeIcon = <Icon fill="#F00" value="selected" />;
    let props: any;
    let obj: any = {};
    obj['fixTop1'] = {};
    obj['fixTop2'] = {
        leftIcon: leftIcon,
        showCloseIcon: false,
    };
    obj['fixTop3'] = {
        showLeftIcon: false,
        closeIcon: closeIcon,
    };

    return (
        <>
            {['fixTop1', 'fixTop2', 'fixTop3'].map((v, i) =>
                v && (props = obj[v]) ? (
                    <div
                        key={i}
                        style={{
                            position: 'relative',
                            margin: '0 auto',
                            width: '100%',
                            minWidth: '320PX',
                            maxWidth: '640PX',
                        }}
                    >
                        <FixTop onClick={clickFun} visible={visible} {...props}>
                            Buy 199 get 20% off text text text text text text text{v}
                        </FixTop>

                        <div style={{ height: '500px', background: '#f1f1f1' }}>{v}</div>
                    </div>
                ) : null,
            )}
        </>
    );
};

export default Demo;
