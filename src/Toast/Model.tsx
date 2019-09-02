import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';

import Toast from './Toast';
import { ToastPropsWithModel } from './PropsType';
import Icon from '../Icon';
import WhiteSpace from '../WhiteSpace';

import { Variable, removeNode, prefix } from '../_util/';
import classNames from 'classnames';
const prefixCls = `${prefix}-toast`;
const { transitionTime, defaultDuration } = Variable;

const model = (props: ToastPropsWithModel, type = '') => {
    const {
        className,
        coverProps,
        onExitDone = () => {},
        time = transitionTime,
        duration = defaultDuration,
        noCover = false,
        ...restProps
    } = props;
    const cls = classNames(className, {
        [`${prefixCls}-${type}`]: type,
    });
    const div = document.createElement('div');
    document.body.appendChild(div);
    const newCoverProps: typeof coverProps = {
        ...coverProps,
    };
    if (noCover) {
        newCoverProps.visible = false;
    }
    const component = (
        <Toast
            className={cls}
            coverProps={newCoverProps}
            onExitDone={() => {
                ReactDOM.unmountComponentAtNode(div);
                onExitDone();
                removeNode(div);
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
            removeNode(div);
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
    model: (props: ToastPropsWithModel = {}) => model(props),
    success: (props: ToastPropsWithModel = {}) =>
        model(
            {
                ...props,
                children: (
                    <Fragment>
                        <Icon size="xl" value="successful" fill="#fff" />
                        {props.children ? <WhiteSpace size="l" /> : null}
                        {props.children}
                    </Fragment>
                ),
            },
            'success',
        ),
    alert: (props: ToastPropsWithModel = {}) =>
        model(
            {
                ...props,
                children: (
                    <Fragment>
                        <Icon size="xl" value="alert" fill="#fff" />
                        {props.children ? <WhiteSpace size="l" /> : null}
                        {props.children}
                    </Fragment>
                ),
            },
            'alert',
        ),
};
