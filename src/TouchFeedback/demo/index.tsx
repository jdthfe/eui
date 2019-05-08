import React from 'react';
import { TouchFeedback } from '@src/index';
const Demo = () => {
    return (
        <div className="TouchFeedback">
            <TouchFeedback activeStyle={{ background: 'yellow' }} activeClassName="touchFeedback-active">
                <p>TouchFeedback</p>
            </TouchFeedback>

            <TouchFeedback disabled activeStyle={{ background: 'yellow' }} activeClassName="touchFeedback-active">
                <p>TouchFeedback disabled</p>
            </TouchFeedback>
        </div>
    );
};

export default Demo;
