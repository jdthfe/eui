import React, { useRef, useMemo, useCallback, useState } from 'react';
import classnames from 'classnames';

import Icon from '../Icon';
import { prefix } from '../_util';
import { InputProps } from './PropsType';
import { useFocus, useJoinFn } from './use';

const prefixCls = `${prefix}-input`;

const Input = (props: InputProps) => {
    const {
        tag,
        type,
        value,
        hideEye = false,
        hideClear = false,
        className,
        _onChange,
        _setValue,
        _validated = true,
        afterInput = null,
        beforeInput = null,
        viewPasswordCb,
        ...restProps
    } = props;
    const ref = useRef<HTMLInputElement>(document.createElement('input'));
    const { focus, _onBlur, _onFocus } = useFocus();
    const onMouseDownClear = useCallback(
        e => {
            e.preventDefault();
            _setValue && _setValue('');
        },
        [_setValue],
    );
    const [eyeClose, setEyeClose] = useState(true);
    const onMouseDownEye = useCallback(
        e => {
            e.preventDefault();
            setEyeClose(!eyeClose);
            viewPasswordCb && viewPasswordCb();
        },
        [eyeClose, viewPasswordCb],
    );
    const processedType = useMemo(() => (!eyeClose ? 'text' : type), [eyeClose, type]);
    const showEye = useMemo(() => !hideEye && type && type.toLocaleLowerCase() === 'password', [type, hideEye]);
    const showClear = useMemo(() => !hideClear, [hideClear]);

    const onChangeAll = useJoinFn(restProps.onChange, _onChange);
    const onBlurAll = useJoinFn(restProps.onBlur, _onBlur);
    const onFocusAll = useJoinFn(restProps.onFocus, _onFocus);

    const notEmpty = useMemo(() => Boolean(value), [value]);

    const cls = useMemo(
        () =>
            classnames(prefixCls, className, {
                [`${prefixCls}-focus`]: focus,
                [`${prefixCls}-notEmpty`]: notEmpty,
                [`${prefixCls}-validated`]: _validated,
            }),
        [_validated, className, focus, notEmpty],
    );
    const tagCls = useMemo(() => classnames(`${prefixCls}-tag`), []);
    return (
        <div className={cls}>
            <label>
                {tag ? <div className={tagCls} children={tag} /> : null}
                <div className={`${prefixCls}-item`}>
                    {beforeInput}
                    <input
                        {...restProps}
                        ref={ref}
                        type={processedType}
                        value={value}
                        onBlur={onBlurAll}
                        onFocus={onFocusAll}
                        onChange={onChangeAll}
                        className={`${prefixCls}-item-input`}
                    />
                    {showClear ? (
                        <Icon
                            fill="#fff"
                            size="xs"
                            value="close"
                            className={`${prefixCls}-clear`}
                            onMouseDown={onMouseDownClear}
                        />
                    ) : null}
                    {showEye ? (
                        <Icon
                            fill="#333"
                            size="s"
                            value={eyeClose ? 'eyeClose' : 'eyeOpen'}
                            className={`${prefixCls}-eye`}
                            onMouseDown={onMouseDownEye}
                        />
                    ) : null}
                    {afterInput}
                </div>
            </label>
        </div>
    );
};

export default Input;
