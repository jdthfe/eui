import React from 'react';
import ReactDOM from 'react-dom';

import MessageBox from './MessageBox';
import { MessageBoxCommen, MessageBoxAlert, MessageBoxConfirm } from './PropsType';
import Cover from '../Cover';
// import Icon from '../Icon';
// import WhiteSpace from '../WhiteSpace';

import { transitionTime } from '../_util/variable';
import { ButtonProps } from '@src/Button/PropsType';

const modal = (props: MessageBoxCommen) => {
    const {
        buttons,
        coverProps = {},
        onExitDone = () => {},
        time = transitionTime,
        noCover = false,
        ...restProps
    } = props;

    const newButtons =
        buttons &&
        buttons.map<ButtonProps>(btnProps => ({
            ...btnProps,
            onClick: e => {
                const { onClick = () => {} } = btnProps;
                const isClose = Boolean(onClick(e));
                // eslint-disable-next-line @typescript-eslint/no-use-before-define
                isClose ? null : close();
            },
        }));

    const cover = noCover
        ? () => {}
        : Cover.visible({
              time: time,
              ...coverProps,
              onClick: e => {
                  coverProps.onClick && coverProps.onClick(e);
                  // eslint-disable-next-line @typescript-eslint/no-use-before-define
                  close();
              },
          });
    const div = document.createElement('div');
    document.body.append(div);
    const component = (
        <MessageBox
            {...restProps}
            onExitDone={() => {
                cover();
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
        const { confirmButton = {}, confirmText = 'confirm', confirmCallback = () => {}, ...restProps } = props;
        modal({
            ...restProps,
            buttons: [
                {
                    ghost: true,
                    rectangle: true,
                    theme: 'primary',
                    style: { border: 'none' },
                    children: confirmText,
                    onClick: confirmCallback,
                    ...confirmButton,
                },
            ],
        });
    },
    confirm: (props: MessageBoxConfirm = {}) => {
        const {
            confirmButton = {},
            confirmText = 'confirm',
            confirmCallback = () => {},
            cancelButton = {},
            cancelText = 'cancel',
            cancelCallback = () => {},
            ...restProps
        } = props;
        modal({
            ...restProps,
            buttons: [
                {
                    rectangle: true,
                    theme: 'primary',
                    children: confirmText,
                    onClick: confirmCallback,
                    ...confirmButton,
                },
                {
                    ghost: true,
                    rectangle: true,
                    theme: 'primary',
                    style: { border: 'none' },
                    children: cancelText,
                    onClick: cancelCallback,
                    ...cancelButton,
                },
            ],
        });
    },
};
