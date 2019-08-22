import React from 'react';
import { ListProps } from './PropsType';
import prefix from '../_util/prefix';
import ListItem from './ListItem';
import classnames from 'classnames';
const prefixCls = `${prefix}-list`;

const List = (props: ListProps) => {
    const { className, children, style, renderHeader, renderFooter, ...restProps } = props;
    const cls = classnames(prefixCls, className);
    return (
        <div className={cls} style={style} {...restProps}>
            {renderHeader ? <div className={`${prefixCls}-header`}>{renderHeader}</div> : null}
            {children ? <div className={`${prefixCls}-body`}>{children}</div> : null}
            {renderFooter ? <div className={`${prefixCls}-footer`}>{renderFooter}</div> : null}
        </div>
    );
};

List.Item = ListItem;

export default List;
