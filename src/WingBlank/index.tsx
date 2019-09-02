import React from 'react';
import classnames from 'classnames';
import { WingBlankProps } from './PropsType';
import { prefix } from '../_util/';
const prefixCls = `${prefix}-wingblank`;

const WingBlank = (props: WingBlankProps) => {
    const { size = 'm', className, ...restProps } = props;
    const cls = classnames(prefixCls, className, `${prefixCls}-${size}`);
    return <div {...restProps} className={cls} />;
};

export default WingBlank;
