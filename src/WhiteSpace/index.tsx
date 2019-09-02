import React from 'react';
import classnames from 'classnames';
import { WhiteSpaceProps } from './PropsType';
import { prefix } from '../_util/';
const prefixCls = `${prefix}-whitespace`;

const WhiteSpace = (props: WhiteSpaceProps) => {
    const { size = 'm', className, ...restProps } = props;
    const cls = classnames(prefixCls, className, `${prefixCls}-${size}`);
    return <div {...restProps} className={cls} />;
};

export default WhiteSpace;
