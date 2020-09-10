import React from 'react';
import classnames from 'classnames';
import { RadioProps } from './PropsType';
import { prefix } from '../_util/';
import { useJoinFn } from './use';
const prefixCls = `${prefix}-radio`;

const Radio = function<T>(props: RadioProps<T>) {
    const { className, style, beforeRadio, label, value, children, _onChange, disabled = false, ...restProps } = props;
    const wrapCls = classnames(prefixCls, className, {
        'is-disabled': disabled,
    });
    const inputCls = classnames(`${prefixCls}__input`, {
        'is-checked': value === label,
    });
    const labelCls = classnames(`${prefixCls}__label`);

    const onChangeAll = useJoinFn(restProps.onChange, _onChange);

    return (
        <label className={wrapCls} style={style}>
            {beforeRadio}
            <span className={inputCls}>
                <span className={`${prefixCls}__inner`} />
                <input
                    {...restProps}
                    type="radio"
                    className={`${prefixCls}__origin`}
                    onChange={onChangeAll}
                    checked={value === label}
                    disabled={disabled}
                />
            </span>
            {children ? <span className={labelCls}>{children}</span> : ''}
        </label>
    );
};

export default Radio;
