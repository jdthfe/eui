import React from 'react';
import ReactDOM from 'react-dom';

import MessageBox from './MessageBox';
import { MessageBoxCommen, MessageBoxAlert, MessageBoxConfirm } from './PropsType';
import prefix from '../_util/prefix';
const prefixCls = `${prefix}-messagebox`;

import { transitionTime } from '../_util/variable';
import { ButtonProps } from '@src/Button/PropsType';

const modal = (props: MessageBoxCommen) => {
    const {
        noCover,
        buttons,
        onClickCloseIcon,
        // Cover
        coverProps = {},
        onClickCover = () => {},
        preventClickCover = false,
        // TransisitonWrap
        onExitDone = () => {},
        time = transitionTime,
        // rest
        ...restProps
    } = props;
    // eslint-disable-next-line @typescript-eslint/no-use-before-define
    const closeMessageBox = () => close();
    const newButtons =
        buttons &&
        buttons.map<ButtonProps>(btnProps => ({
            ...btnProps,
            onClick: e => {
                const { onClick = () => {} } = btnProps;
                const isClose = Boolean(onClick(e));
                isClose ? null : closeMessageBox();
            },
        }));

    const div = document.createElement('div');
    document.body.append(div);
    const newCoverProps: typeof coverProps = {
        ...coverProps,
        onClick: preventClickCover
            ? () => {}
            : e => {
                  const { onClick } = coverProps;
                  onClick && onClick(e);
                  if (!onClickCover()) {
                      closeMessageBox();
                  }
              },
    };
    if (noCover) {
        newCoverProps.visible = false;
    }

    const component = (
        <MessageBox
            {...restProps}
            onClickCloseIcon={
                onClickCloseIcon
                    ? () => {
                          if (!onClickCloseIcon()) {
                              closeMessageBox();
                          }
                      }
                    : onClickCloseIcon
            }
            coverProps={newCoverProps}
            onExitDone={() => {
                ReactDOM.unmountComponentAtNode(div);
                div.remove();
                onExitDone();
            }}
            time={time}
            mountNode={div}
            buttons={newButtons}
        />
    );
    ReactDOM.render(component, div, () => {
        ReactDOM.render(React.cloneElement(component, { visible: true }), div);
    });
    const close = () => ReactDOM.render(React.cloneElement(component, { visible: false }), div);
    return close;
};
// export default MessageBox;
export default {
    default: (props: MessageBoxCommen = {}) => modal(props),
    alert: (props: MessageBoxAlert = {}) => {
        const {
            multiLineButtons,
            confirmButton = {},
            confirmChildren = 'confirm',
            confirmCallback = () => {},
            className,
            ...restProps
        } = props;
        modal({
            ...restProps,
            multiLineButtons,
            className: multiLineButtons ? className + ` ${prefixCls}-buttons-multiline-alert` : className,
            buttons: [
                {
                    ghost: !multiLineButtons,
                    rectangle: !multiLineButtons,
                    theme: 'primary',
                    style: { border: 'none' },
                    children: confirmChildren,
                    ...confirmButton,
                    onClick: e => {
                        confirmButton.onClick && confirmButton.onClick(e);
                        return confirmCallback();
                    },
                },
            ],
        });
    },
    confirm: (props: MessageBoxConfirm = {}) => {
        const {
            multiLineButtons,
            confirmButton = {},
            confirmChildren = 'confirm',
            confirmCallback = () => {},
            cancelButton = {},
            cancelChildren = 'cancel',
            cancelCallback = () => {},
            ...restProps
        } = props;
        modal({
            ...restProps,
            multiLineButtons,
            buttons: [
                {
                    rectangle: !multiLineButtons,
                    theme: 'primary',
                    children: confirmChildren,
                    ...confirmButton,
                    onClick: e => {
                        confirmButton.onClick && confirmButton.onClick(e);
                        return confirmCallback();
                    },
                },
                {
                    ghost: true,
                    rectangle: !multiLineButtons,
                    activeClassName: multiLineButtons ? 'none' : '',
                    className: multiLineButtons ? `${prefixCls}-buttons-multiline-last` : '',
                    theme: multiLineButtons ? 'customize' : 'primary',
                    style: { border: 'none' },
                    children: cancelChildren,
                    ...cancelButton,
                    onClick: e => {
                        cancelButton.onClick && cancelButton.onClick(e);
                        return cancelCallback();
                    },
                },
            ],
        });
    },
};
