import React from 'react';
import { Test } from '@src/index';
const Demo = () => {
    return (
        <div className="Test">
            <Test>children</Test>
            <Test prop={'Hello World'}>children</Test>
        </div>
    );
};

export default Demo;
