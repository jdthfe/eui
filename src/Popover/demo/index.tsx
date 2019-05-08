import React, { useRef, useState } from 'react';
import { Button, Popover } from '@src/index';
const Demo = () => {
    const [isShow, setIsShow] = useState(false);
    const testBtn = useRef(null);
    const showPopover = () => {
        setIsShow(true);
    };

    const hidePopover = () => setIsShow(false);

    return (
        <>
            <div ref={testBtn}>
                <Button size={'s'} onClick={showPopover}>
                    test
                </Button>
            </div>
            <Popover
                visible={isShow}
                onClose={hidePopover}
                anchorEl={testBtn.current}
                dir={'bottom-center'}
                hasArrow={true}
            >
                {['red', 'yellow', 'blue'].map((v, i) => (
                    <p key={i} style={{ margin: 0, padding: 0 }}>
                        {v}
                    </p>
                ))}
            </Popover>
        </>
    );
};

export default Demo;
