import React from 'react';
import { Icon, WingBlank } from '@src/index';
import { IconProps } from '@src/Icon/PropsType';
import './index.scss';

const iconList: IconProps['value'][] = [
    'addCircle',
    'alert',
    'arrow',
    'check',
    'close',
    'closeFilled',
    'current',
    'delete',
    'download',
    'edit',
    'eyeClose',
    'eyeOpen',
    'loading',
    'more',
    'plus',
    'pwd',
    'pwdOpen',
    'rarrow',
    'remind',
    'selected',
    'share',
    'successful',
    'time',
    'tip',
    'uncheck',
];
const sizeList: IconProps['size'][] = ['xs', 's', 'm', 'l', 'xl'];
const fillList: string[] = ['red', 'orange', 'yellow', 'green', 'blue'];
const Demo = () => {
    return (
        <WingBlank className="Icon">
            <h4>Value</h4>
            <div className="Icon-value">
                {iconList.map(item => (
                    <div key={item} className="Icon-value-item">
                        <Icon value={item} />
                        <p>{item}</p>
                    </div>
                ))}
            </div>
            <h4>Size</h4>
            <div className="Icon-size">
                {sizeList.map(item => (
                    <div key={item} className="Icon-size-item">
                        <Icon size={item} value={iconList[0]} />
                        <p>{item}</p>
                    </div>
                ))}
            </div>
            <h4>Fill</h4>
            <div className="Icon-fill">
                {fillList.map(item => (
                    <div key={item} className="Icon-fill-item">
                        <Icon value="close" fill={item} />
                        <p>{item}</p>
                    </div>
                ))}
            </div>
        </WingBlank>
    );
};

export default Demo;
