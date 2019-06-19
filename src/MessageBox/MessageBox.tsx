import React from 'react';
import classnames from 'classnames';
import { MessageBoxProps } from './PropsType';
import prefix from '../_util/prefix';
const prefixCls = `${prefix}-messagebox`;

import Icon from '../Icon';
import Button from '../Button';
import Cover from '../Cover';
import Portal from '../Portal';
import TransitionWrap from '../TransitionWrap';
import variable from '../_util/variable';
const { transitionFade } = variable;

const { Transition } = Cover;

const MessageBox = (props: MessageBoxProps) => {
    const {
        children,
        className,
        title = '',
        buttons = [],
        multiLineButtons = false,
        hiddenline,
        onClickCloseIcon = false,
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
            <Transition visible={visible} time={time} keepOnExit={keepOnExit} onExitDone={onExitDone} {...coverProps} />

            <TransitionWrap
                visible={visible}
                keepOnExit={keepOnExit}
                time={time}
                onExitDone={onExitDone}
                transitionClassName={transitionClassName}
            >
                <div {...restProps} className={cls}>
                    {onClickCloseIcon ? (
                        <Icon
                            className={`${prefixCls}-close`}
                            onClick={onClickCloseIcon === true ? () => {} : onClickCloseIcon}
                            value="close"
                        />
                    ) : null}
                    {/* Title */}
                    {title ? <p className={`${prefixCls}-title`}>{title}</p> : null}
                    {/* Main */}
                    {children ? <div className={`${prefixCls}-content`}>{children}</div> : null}
                    {(hiddenline === undefined ? (
                        multiLineButtons
                    ) : (
                        hiddenline
                    )) ? null : (
                        <div className={`${prefixCls}-line`} />
                    )}
                    {/* Footer */}
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
