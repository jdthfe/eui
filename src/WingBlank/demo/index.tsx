import React from 'react';
import { WingBlank, WhiteSpace } from '@src/index';
import './index.scss';
const Demo = () => {
    return (
        <div className="WingBlank">
            <div className="placeholder">placeholder</div>
            <WhiteSpace />
            <WingBlank size="s">
                <div className="placeholder">placeholder</div>
            </WingBlank>
            <WhiteSpace />
            <WingBlank>
                <div className="placeholder">placeholder</div>
            </WingBlank>
            <WhiteSpace />
            <WingBlank size="l">
                <div className="placeholder">placeholder</div>
            </WingBlank>
        </div>
    );
};

export default Demo;
