import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';

import Toast from './Toast';
import { ToastPropsWithModel } from './PropsType';
import Icon from '../Icon';
import WhiteSpace from '../WhiteSpace';

import { transitionTime, defaultDuration } from '../_util/variable';

const modal = (props: ToastPropsWithModel) => {
    const {
        coverProps,
        onExitDone = () => {},
        time = transitionTime,
        duration = defaultDuration,
        noCover = false,
        ...restProps
    } = props;

    const div = document.createElement('div');
    document.body.append(div);
    const newCoverProps: typeof coverProps = {
        ...coverProps,
    };
    if (noCover) {
        newCoverProps.visible = false;
    }
    const component = (
        <Toast
            coverProps={newCoverProps}
            onExitDone={() => {
                ReactDOM.unmountComponentAtNode(div);
                onExitDone();
                div.remove();
            }}
            {...restProps}
            time={time}
            mountNode={div}
            visible={false}
        />
    );
    ReactDOM.render(component, div, () => {
        ReactDOM.render(React.cloneElement(component, { visible: true }), div);
    });

    const close = () => {
        if (props.children === undefined) {
            ReactDOM.unmountComponentAtNode(div);
            onExitDone();
            div.remove();
        }
        return ReactDOM.render(React.cloneElement(component, { visible: false }), div);
    };
    if (duration) {
        setTimeout(() => {
            close();
        }, duration);
    }
    return close;
};

export default {
    normal: (props: ToastPropsWithModel = {}) => modal(props),
    success: (props: ToastPropsWithModel = {}) =>
        modal({
            ...props,
            children: (
                <Fragment>
                    <Icon value="successful" fill="#fff" />
                    {props.children ? <WhiteSpace size="l" /> : null}
                    {props.children}
                </Fragment>
            ),
        }),
    alert: (props: ToastPropsWithModel = {}) =>
        modal({
            ...props,
            children: (
                <Fragment>
                    <Icon value="alert" fill="#fff" />
                    {props.children ? <WhiteSpace size="l" /> : null}
                    {props.children}
                </Fragment>
            ),
        }),
};
