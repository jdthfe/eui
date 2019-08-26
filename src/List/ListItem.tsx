import React from 'react';
import { ListItemPropsType, BriefProps } from './PropsType';
import classnames from 'classnames';
import TouchFeedback from '../TouchFeedback';
import Icon from '../Icon';
import { prefix } from '../_util';
const prefixCls = `${prefix}-list`;

const ListItem = (props: ListItemPropsType) => {
    const {
        className,
        thumb,
        children,
        extra,
        wrap,
        activeStyle,
        disabled,
        onClick,
        arrow,
        align,
        index = undefined,
        ...restProps
    } = props;
    const contentCls = classnames(`${prefixCls}-content`, {
        [`${prefixCls}-content-wrap`]: wrap,
    });
    const arrowCls = classnames(`${prefixCls}-arrow`, {
        [`${prefixCls}-arrow-${arrow}`]: arrow,
    });
    const itemCls = classnames(`${prefixCls}-item`, className, {
        [`${prefixCls}-align-${align}`]: align,
    });
    const content = (
        <div
            {...restProps}
            className={itemCls}
            onClick={e => {
                onClick && onClick(e, index);
            }}
        >
            {thumb ? (
                <div className={`${prefixCls}-thumb`}>{typeof thumb === 'string' ? <img src={thumb} /> : thumb}</div>
            ) : null}
            {children ? <div className={contentCls}>{children}</div> : null}
            {extra ? <div className={`${prefixCls}-extra`}>{extra}</div> : null}
            {arrow ? (
                <div className={arrowCls}>
                    <Icon value="arrow" />
                </div>
            ) : null}
        </div>
    );
    return (
        <TouchFeedback
            activeStyle={activeStyle}
            activeClassName={`${prefixCls}-item-active`}
            disabled={disabled || !onClick}
        >
            {content}
        </TouchFeedback>
    );
};

ListItem.Brief = (props: BriefProps) => {
    return (
        <div className={`${prefixCls}-brief`} style={props.style}>
            {props.children}
        </div>
    );
};
export default ListItem;
