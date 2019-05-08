import React from 'react';
import { WhiteSpace } from '@src/index';
import './index.scss';
const Demo = () => {
    return (
        <div className="WhiteSpace">
            <div className="placeholder">placeholder</div>
            <WhiteSpace size="xs" />
            <div className="placeholder">placeholder</div>
            <WhiteSpace size="s" />
            <div className="placeholder">placeholder</div>
            <WhiteSpace />
            <div className="placeholder">placeholder</div>
            <WhiteSpace size="l" />
            <div className="placeholder">placeholder</div>
            <WhiteSpace size="xl" />
            <div className="placeholder">placeholder</div>
        </div>
    );
};

export default Demo;
