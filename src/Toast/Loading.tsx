import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';

import Toast from './Toast';
import { ToastProps } from './PropsType';
import Cover from '../Cover';
import Icon from '../Icon';
import WhiteSpace from '../WhiteSpace';

import { transitionTime } from '../_util/variable';
const div = document.createElement('div');
let close = () => {};
let cover = () => {};
let timer: number;

const modal = (props: ToastProps) => {
    const { onExitDone = () => {}, time = transitionTime, duration = 0, noCover = false, ...restProps } = props;
    cover = noCover || !props.children ? () => {} : Cover.invisible({ time: time });
    document.body.append(div);
    const component = (
        <Toast
            {...restProps}
            onExitDone={() => {
                onExitDone();
                ReactDOM.unmountComponentAtNode(div);
                div.remove();
            }}
            time={time}
            mountNode={div}
            visible={false}
        />
    );
    if (!timer) {
        ReactDOM.render(component, div, () => {
            ReactDOM.render(React.cloneElement(component, { visible: true }), div);
        });
    }

    close = () => ReactDOM.render(React.cloneElement(component, { visible: false }), div);

    window.clearTimeout(timer);
    if (duration) {
        timer = window.setTimeout(() => {
            close();
            cover();
            timer = 0;
        }, duration);
    }
    return close;
};
// export default Toast;

export default {
    loading: (props: ToastProps = {}) => {
        modal({
            ...props,
            children: (
                <Fragment>
                    <Icon value="loading" fill="#fff" />
                    {props.children ? <WhiteSpace size="l" /> : null}
                    {props.children}
                </Fragment>
            ),
        });
    },
    close: () => {
        close();
        cover();
    },
};
