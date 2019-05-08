import React from 'react';
import { Icon, WhiteSpace } from '@src/index';
import { IconProps } from '@src/Icon/PropsType';
import './index.scss';

const iconList: string[] = ['addcart', 'alipay', 'close', 'remind', 'selected'];
const sizeList: IconProps['size'][] = ['xs', 's', 'm', 'l', 'xl'];
const Demo = () => {
    return (
        <div className="Icon">
            <div className="Icon-value">
                {iconList.map(item => (
                    <div key={item} className="Icon-value-item">
                        <Icon value={item} />
                        <p>{item}</p>
                    </div>
                ))}
            </div>
            <WhiteSpace />
            <div className="Icon-size">
                {sizeList.map(item => (
                    <div key={item} className="Icon-size-item">
                        <Icon size={item} value={iconList[0]} />
                        <p>{item}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Demo;
