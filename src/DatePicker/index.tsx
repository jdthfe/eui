import React from 'react';
import classnames from 'classnames';
import { DatePickerProps } from './PropsType';
import { prefix } from '../_util/';
const prefixCls = `${prefix}-datepicker`;

const DatePicker = (props: DatePickerProps) => {
    const { prop = 'default', className, ...restProps } = props;
    const cls = classnames(prefixCls, className);
    return (
        <div {...restProps} className={cls}>
            {prop}
        </div>
    );
};

export default DatePicker;
