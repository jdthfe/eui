import React from 'react';
import { TouchFeedback, WingBlank } from '@src/index';
const Demo = () => {
    return (
        <WingBlank className="TouchFeedback">
            <TouchFeedback activeStyle={{ background: 'yellow' }} activeClassName="touchFeedback-active">
                <p>TouchFeedback</p>
            </TouchFeedback>

            <TouchFeedback disabled activeStyle={{ background: 'yellow' }} activeClassName="touchFeedback-active">
                <p>TouchFeedback disabled</p>
            </TouchFeedback>
        </WingBlank>
    );
};

export default Demo;
