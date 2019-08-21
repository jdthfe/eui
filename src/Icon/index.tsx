import React, { useEffect } from 'react';
import { IconProps } from './PropsType';
import loadSprite from './loadSprite';
import classnames from 'classnames';
import { prefix } from '../_util/';
const prefixCls = `${prefix}-icon`;

const Icon = (props: IconProps) => {
    const { value, size = 'l', className, ...restProps } = props;
    const cls = classnames(prefixCls, className, `${prefixCls}-${size}`, {
        [`${prefixCls}-loading`]: value === 'loading',
    });
    useEffect(() => {
        loadSprite();
        return () => {};
    }, []);

    return (
        <svg {...restProps} aria-hidden="true" className={cls}>
            <use xlinkHref={`#${value}`} />
        </svg>
    );
};

export default Icon;
