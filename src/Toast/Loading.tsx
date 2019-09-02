import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';

import Toast from './Toast';
import { ToastPropsWithModel } from './PropsType';
import Icon from '../Icon';
import WhiteSpace from '../WhiteSpace';

import { Variable, prefix, removeNode } from '../_util/';
import classNames from 'classnames';
const prefixCls = `${prefix}-toast`;
const { transitionTime } = Variable;

const div = document.createElement('div');
let close = () => {};
let timer: number;

const model = (props: ToastPropsWithModel) => {
    const {
        className,
        coverProps = {},
        onExitDone = () => {},
        time = transitionTime,
        duration = 0,
        noCover = false,
        ...restProps
    } = props;
    const cls = classNames(className, `${prefixCls}-loading`);
    document.body.appendChild(div);
    const CoverProps: typeof coverProps = {
        ...coverProps,
    };
    if (noCover) {
        CoverProps.visible = false;
    }
    const component = (
        <Toast
            className={cls}
            coverProps={CoverProps}
            {...restProps}
            onExitDone={() => {
                onExitDone();
                ReactDOM.unmountComponentAtNode(div);
                removeNode(div);
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
