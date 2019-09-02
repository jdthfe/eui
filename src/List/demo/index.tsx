import React, { useState } from 'react';
import { List, WingBlank, Button } from '@src/index';

const Item = List.Item;
const Brief = Item.Brief;
const Demo = () => {
    const [disabled, setDisabled] = useState(false);
    return (
        <div className="List">
            <WingBlank size="l">
                <List renderHeader={'Basic Style'} className="my-list">
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
                <List renderHeader={'Subtitle'} className="my-list">
                    <Item wrap onClick={() => {}}>
                        Title <Brief>subtitle</Brief>
                    </Item>
                    <Item thumb="https://avatars1.githubusercontent.com/u/49478572?s=200&v=4" onClick={() => {}}>
                        Title <Brief>subtitle</Brief>
                    </Item>
                </List>
                <List renderHeader={'Customized Right Side（Empty Content / Text / Image）'} className="my-list">
                    <Item>Title</Item>
                    <Item arrow="horizontal" onClick={() => {}}>
                        Title
                    </Item>
                    <Item extra="extra content" arrow="horizontal" onClick={() => {}}>
                        Title
                    </Item>
                    <Item extra="10:30" align="top" thumb="https://avatars1.githubusercontent.com/u/49478572?s=200&v=4">
                        Title <Brief>subtitle</Brief>
                    </Item>
                </List>
                <List renderHeader={'Align Vertical Center'} className="my-list">
                    <Item extra="extra content">
                        Title <Brief>subtitle</Brief>
                    </Item>
                </List>
                <List renderHeader={'Icon in the left'}>
                    <Item
                        thumb="https://avatars1.githubusercontent.com/u/49478572?s=200&v=4"
                        arrow="horizontal"
                        onClick={() => {}}
                    >
                        My wallet
                    </Item>
                    <Item
                        thumb="https://avatars1.githubusercontent.com/u/49478572?s=200&v=4"
                        onClick={() => {}}
                        arrow="horizontal"
                    >
                        My Cost Ratio
                    </Item>
                </List>
                <List renderHeader={'Text Wrapping'} className="my-list">
                    <Item data-seed="logId">Single line，long text will be hidden with ellipsis；</Item>
                    <Item wrap>
                        Multiple line，long text will wrap；Long Text Long Text Long Text Long Text Long Text Long Text
                    </Item>
                    <Item extra="extra content" align="top" wrap>
                        Multiple line and long text will wrap. Long Text Long Text Long Text
                    </Item>
                    <Item extra="no arrow" arrow="empty" className="spe">
                        In rare cases, the text of right side will wrap in the single line with long text. long text
                        long text long text
                    </Item>
                </List>
                <List renderHeader={'Other'} className="my-list">
                    <Item
                        disabled={disabled}
                        extra=""
                        onClick={() => {
                            setDisabled(true);
                        }}
                    >
                        Click to disable
                    </Item>
                    <Item>
                        <select defaultValue="1">
                            <option value="1">Html select element</option>
                            <option value="2" disabled>
                                Unable to select
                            </option>
                            <option value="3">option 3</option>
                        </select>
                    </Item>
                </List>
                <List renderHeader={'Form Validation'}>
                    <Item>
                        <Button theme="primary" size="l" inline>
                            Submit
                        </Button>
                        <Button theme="primary" size="l" inline style={{ marginLeft: '2.5px' }}>
                            Reset
                        </Button>
                    </Item>
                </List>
            </WingBlank>
        </div>
    );
};

export default Demo;
