import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';

import Toast from './Toast';
import { ToastPropsWithModel } from './PropsType';
import Icon from '../Icon';
import WhiteSpace from '../WhiteSpace';

import variable from '../_util/variable';
const { transitionTime } = variable;

const div = document.createElement('div');
let close = () => {};
let timer: number;

const model = (props: ToastPropsWithModel) => {
    const {
        coverProps = {},
        onExitDone = () => {},
        time = transitionTime,
        duration = 0,
        noCover = false,
        ...restProps
    } = props;
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
            timer = 0;
        }, duration);
    }
    return close;
};
// export default Toast;

export default {
    loading: (props: ToastPropsWithModel = {}) => {
        model({
            ...props,
            children: (
                <Fragment>
                    <Icon size="xl" value="loading" fill="#fff" />
                    {props.children ? <WhiteSpace size="l" /> : null}
                    {props.children}
                </Fragment>
            ),
        });
    },
    closeLoading: () => {
        close();
    },
};
