import React from 'react';
import classnames from 'classnames';
import { MessageBoxCommen } from './PropsType';
import prefix from '../_util/prefix';
const prefixCls = `${prefix}-messagebox`;

import { transitionFade } from '../_util/variable';
import Icon from '../Icon';
import Button from '../Button';
import Portal from '../Portal';
import TransitionWrap from '../TransitionWrap';

const MessageBox = (props: MessageBoxCommen) => {
    const {
        children,
        className,
        title = '',
        hiddenline = false,
        buttons = [],
        multiLine = false,
        onClickCancel = undefined,
        // TransitionWrap
        visible,
        keepOnExit,
        time,
        onExitDone,
        transitionClassName = transitionFade,
        // Portal
        mountNode,

        ...restProps
    } = props;
    const cls = classnames(prefixCls, className);
    const btnCls = classnames(`${prefixCls}-buttons`, { [`${prefixCls}-buttons-multiline`]: multiLine });
    return (
        <Portal mountNode={mountNode}>
            <TransitionWrap
                visible={visible}
                keepOnExit={keepOnExit}
                time={time}
                onExitDone={onExitDone}
                transitionClassName={transitionClassName}
            >
                <div {...restProps} className={cls}>
                    {onClickCancel ? (
                        <Icon className={`${prefixCls}-close`} onClick={onClickCancel} value="close" />
                    ) : null}
                    {title ? <p className={`${prefixCls}-title`}>{title}</p> : null}
                    {children ? <div className={`${prefixCls}-content`}>{children}</div> : null}
                    {hiddenline ? null : <div className={`${prefixCls}-line`} />}
                    {buttons.length ? (
                        <div className={btnCls}>
                            {buttons.map((btnProps, index) => (
                                <Button {...btnProps} key={index} />
                            ))}
                        </div>
                    ) : null}
                </div>
            </TransitionWrap>
        </Portal>
    );
};

export default MessageBox;
