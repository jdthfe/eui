import React, { useState } from 'react';
import { Popup, Button, WingBlank, List } from '@src/index';
const Item = List.Item;
const Demo = () => {
    const [showPopup, setshowPopup] = useState(false);
    function changeShow() {
        setshowPopup(!showPopup);
    }
    return (
        <div className="Popup">
            <WingBlank>
                <Button theme="primary" onClick={changeShow}>
                    show Popup
                </Button>
                <div style={{ height: '800px' }} />
                <Popup visible={showPopup} coverProps={{ onClick: changeShow }} time={200}>
                    <div style={{ height: '1000px', background: '#f00' }} />
                    <List>
                        <Item>Title</Item>
                        <Item
                            index={1}
                            thumb={<img src="https://avatars1.githubusercontent.com/u/49478572?s=200&v=4" />}
                            extra={'extra content'}
                            onClick={(e, i) => {
                                console.log(e, i);
                            }}
                        >
                            Title
                        </Item>
                    </List>
                </Popup>
            </WingBlank>
        </div>
    );
};

export default Demo;
