import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';

import Toast from './Toast';
import Loading from './Loading';
import { ToastProps } from './PropsType';
import Icon from '../Icon';
import WhiteSpace from '../WhiteSpace';

import { transitionTime, defaultDuration } from '../_util/variable';

const modal = (props: ToastProps) => {
    const {
        coverProps = {},
        onExitDone = () => {},
        time = transitionTime,
        duration = defaultDuration,
        noCover,
        ...restProps
    } = props;

    const div = document.createElement('div');
    document.body.append(div);
    const CoverProps: typeof coverProps = {
        ...coverProps,
    };
    if (noCover) {
        CoverProps.visible = false;
    }
    const component = (
        <Toast
            coverProps={CoverProps}
            onExitDone={() => {
                ReactDOM.unmountComponentAtNode(div);
                div.remove();
                onExitDone();
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

    const close = () => ReactDOM.render(React.cloneElement(component, { visible: false }), div);
    if (duration) {
        setTimeout(() => {
            close();
        }, duration);
    }
    return close;
};
// export default Toast;
export default {
    normal: (props: ToastProps = {}) => modal(props),
    success: (props: ToastProps = {}) =>
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
    alert: (props: ToastProps = {}) =>
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
    ...Loading,
};
