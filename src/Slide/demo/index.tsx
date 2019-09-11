import React, { useState } from 'react';
import { Button, Slide, WingBlank, List } from '@src/index';
const Item = List.Item;
const Demo = () => {
    const [showState, setShowState] = useState(false);
    return (
        <WingBlank>
            <div className="Slide">
                <Slide>children</Slide>
                <Button
                    theme="primary"
                    onClick={() => {
                        setShowState(!showState);
                    }}
                >
                    show Slide
                </Button>
                <Slide visible={showState}>
                    <List>
                        <Item />
                    </List>
                </Slide>
            </div>
        </WingBlank>
    );
};

export default Demo;
