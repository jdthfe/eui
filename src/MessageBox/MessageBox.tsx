import React from 'react';
import classnames from 'classnames';
import { MessageBoxProps } from './PropsType';
import prefix from '../_util/prefix';
const prefixCls = `${prefix}-messagebox`;

import { transitionFade } from '../_util/variable';
import Icon from '../Icon';
import Button from '../Button';
import Cover from '../NewCover';
import Portal from '../Portal';
import TransitionWrap from '../TransitionWrap';

const MessageBox = (props: MessageBoxProps) => {
    const {
        children,
        className,
        title = '',
        buttons = [],
        multiLineButtons = false,
        hiddenline,
        onClickCloseIcon = undefined,
        // TransitionWrap
        visible,
        keepOnExit,
        time,
        onExitDone,
        transitionClassName = transitionFade,
        // Portal
        mountNode,
        // Cover
        coverProps = {},

        ...restProps
    } = props;
    const cls = classnames(prefixCls, className);
    const btnCls = classnames(`${prefixCls}-buttons`, { [`${prefixCls}-buttons-multiline`]: multiLineButtons });
    return (
        <Portal mountNode={mountNode}>
            <Cover.TCover
                visible={visible}
                keepOnExit={keepOnExit}
                time={time}
                onExitDone={onExitDone}
                transitionClassName={transitionClassName}
                {...coverProps}
            />

            <TransitionWrap
                visible={visible}
                keepOnExit={keepOnExit}
                time={time}
                onExitDone={onExitDone}
                transitionClassName={transitionClassName}
            >
                <div {...restProps} className={cls}>
                    {onClickCloseIcon ? (
                        <Icon className={`${prefixCls}-close`} onClick={onClickCloseIcon} value="close" />
                    ) : null}
                    {title ? <p className={`${prefixCls}-title`}>{title}</p> : null}
                    {children ? <div className={`${prefixCls}-content`}>{children}</div> : null}
                    {(hiddenline === undefined ? (
                        multiLineButtons
                    ) : (
                        hiddenline
                    )) ? null : (
                        <div className={`${prefixCls}-line`} />
                    )}
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
