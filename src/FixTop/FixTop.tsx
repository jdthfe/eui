import React from 'react';
import classnames from 'classnames';
import { FixTopProps } from './PropsType';
import { prefix } from '../_util/';
const prefixCls = `${prefix}-fixtop`;
import Icon from '../Icon';

const FixTop = (props: FixTopProps) => {
    const {
        visible,
        showLeftIcon = true,
        leftIcon,
        className,
        children,
        showCloseIcon = true,
        closeIcon,
        onClick,
        id,
        ...restProps
    } = props;
    const cls = classnames(prefixCls, className);
    return visible ? (
        <div {...restProps} className={cls}>
            <div className={`${prefixCls}-icon`}>
                {showLeftIcon ? leftIcon ? leftIcon : <Icon fill="666" value="remind" /> : ''}
            </div>
            <div>{children}</div>
            <div onClick={onClick} className={`${prefixCls}-close`}>
                {showCloseIcon ? closeIcon ? closeIcon : <Icon fill="DE6A1C" value="close" /> : ''}
            </div>
        </div>
    ) : null;
};

export default FixTop;
