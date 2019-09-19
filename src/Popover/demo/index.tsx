import React, { useRef, useState } from 'react';
import { Button, Popover, WingBlank, WhiteSpace } from '@src/index';

const Demo = () => {
    const [isShow, setIsShow] = useState(false);
    const refBtn = useRef(null);
    const showPopover = () => {
        setIsShow(true);
    };
    const hidePopover = () => setIsShow(false);

    const [isShow2, setIsShow2] = useState(false);
    const refBtn2 = useRef(null);
    const showPopover2 = () => {
        setIsShow2(true);
    };
    const hidePopover2 = () => setIsShow2(false);

    return (
        <WingBlank>
            <div ref={refBtn}>
                <Button ghost onClick={showPopover}>
                    Popover
                </Button>
            </div>
            <Popover dir="bottom-center" visible={isShow} anchorEl={refBtn.current} hasArrow onClickCover={hidePopover}>
                {['red', 'yellow', 'blue'].map((item, index) => (
                    <p style={{ margin: '10px 20px' }} key={index}>
                        {item}
                    </p>
                ))}
            </Popover>

            <WhiteSpace size="xl" />

            <div ref={refBtn2}>
                <Button ghost onClick={showPopover2}>
                    Popover
                </Button>
            </div>
            <Popover dir="top-center" visible={isShow2} onClickCover={hidePopover2} anchorEl={refBtn2.current}>
                {['red', 'yellow', 'blue'].map((item, index) => (
                    <p style={{ margin: '10px 20px' }} key={index}>
                        {item}
                    </p>
                ))}
            </Popover>
        </WingBlank>
    );
};

export default Demo;
