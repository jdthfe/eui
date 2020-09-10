import React, { useState } from 'react';
import { Radio, WingBlank } from '@src/index';

const { useRadio } = Radio;

const Demo = () => {
    const [value, setValue] = useState<number>(1);
    const { bind: children1Bind, label: children1Label } = useRadio<number>({
        setValue: setValue,
        value: value,
        initLabel: 1,
    });
    const { bind: children2Bind, label: children2Label } = useRadio<number>({
        setValue: setValue,
        value: value,
        initLabel: 2,
    });

    return (
        <div className="Radio">
            <WingBlank>
                <Radio {...children1Bind} label={children1Label} value={value}>
                    children1
                </Radio>
                <Radio {...children2Bind} label={children2Label} value={value}>
                    children2
                </Radio>
            </WingBlank>
        </div>
    );
};

export default Demo;
