import React, { useState, useCallback } from 'react';
import { Radio, WingBlank } from '@src/index';

const { useRadio } = Radio;

const Demo = () => {
    const { bind: children1Bind, value: children1Value } = useRadio({ initialValue: 'children1' });
    const { bind: children2Bind, value: children2Value } = useRadio({ initialValue: 'children2' });

    const [value, setValue] = useState();

    const handleChange = useCallback(e => {
        const val = e.currentTarget.value;
        setValue(val);
    }, []);

    return (
        <div className="Radio">
            <WingBlank>
                <Radio {...children1Bind} label={children1Value} value={value} onChange={handleChange} disabled>
                    children1
                </Radio>
                <Radio {...children2Bind} label={children2Value} value={value} onChange={handleChange}>
                    children2
                </Radio>
            </WingBlank>
        </div>
    );
};

export default Demo;
