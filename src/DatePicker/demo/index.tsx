import React from 'react';
import { DatePicker } from '@src/index';
const Demo = () => {
    return (
        <div className="DatePicker">
            <DatePicker>children</DatePicker>
            <DatePicker prop={'Hello World'}>children</DatePicker>
        </div>
    );
};

export default Demo;
