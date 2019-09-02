import React from 'react';
import classnames from 'classnames';
import { ButtonProps } from './PropsType';
import TouchFeedback from '../TouchFeedback';
import { prefix } from '../_util/';
const prefixCls = `${prefix}-button`;

const Button = (props: ButtonProps) => {
    const {
        size = 'l',
        theme = 'customize',
        ghost = false,
        inline = false,
        rectangle = false,
        disabled,
        className,
        activeStyle,
        activeClassName,
        ...restProps
    } = props;
    const cls = classnames(prefixCls, className, `${prefixCls}-${size}`, `${prefixCls}-${theme}`, {
        [`${prefixCls}-rectangle`]: rectangle === true,
        [`${prefixCls}-disabled`]: disabled,
        [`${prefixCls}-ghost`]: ghost,
        [`${prefixCls}-inline`]: inline,
    });
    return (
        <TouchFeedback
            activeClassName={activeClassName || `${prefixCls}-active`}
            activeStyle={activeStyle}
            disabled={disabled}
        >
            <button {...restProps} role="button" className={cls} aria-disabled={disabled} disabled={disabled} />
        </TouchFeedback>
    );
};

export default Button;
