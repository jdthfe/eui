import React from 'react';
import classnames from 'classnames';
import { BadgeProps } from './PropsType';
import { prefix } from '../_util/';
const prefixCls = `${prefix}-badge`;

const Badge = (props: BadgeProps) => {
    const { className, children, text, size, max, dot, corner, ...restProps } = props;
    const overflowCount = max as number;
    let textCopy = typeof text === 'number' && text > overflowCount ? `${overflowCount}+` : text;

    if (dot) {
        textCopy = '';
    }

    const scrollNumberCls = classnames({
        [`${prefixCls}-dot`]: dot,
        [`${prefixCls}-dot-large`]: dot && size === 'large',
        [`${prefixCls}-text`]: !dot && !corner,
        [`${prefixCls}-corner`]: corner,
        [`${prefixCls}-corner-large`]: corner && size === 'large',
    });

    const badgeCls = classnames(prefixCls, className, {
        [`${prefixCls}-not-a-wrapper`]: !children,
        [`${prefixCls}-corner-wrapper`]: corner,
        [`${prefixCls}-corner-wrapper-large`]: corner && size === 'large',
    });

    return (
        <span className={badgeCls} {...restProps}>
            {children}
            {(textCopy || dot) && (
                <sup className={scrollNumberCls} {...restProps}>
                    {textCopy}
                </sup>
            )}
        </span>
    );
};
export default Badge;
