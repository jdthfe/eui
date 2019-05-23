import React, { useEffect } from 'react';
import classnames from 'classnames';
import { TransitionStatus, TransitionWrapPropsWithChildren } from './PropsType';

const statusCase: { [propName: string]: TransitionStatus } = {
    entry: 'entry',
    entryActive: 'entry-active',
    entryDone: 'entry-done',
    exit: 'exit',
    exitActive: 'exit-active',
    exitDone: 'exit-done',
};

const TransitionWrap = (props: TransitionWrapPropsWithChildren) => {
    const {
        children,
        time = 0,
        visible = false,
        keepOnExit = false,
        transitionClassName = 'transition',
        onExitDone = () => {},
    } = props;
    const [status, setStatus] = React.useState(visible ? statusCase.entryDone : statusCase.exitDone);
    const [show, setShow] = React.useState(visible);

    useEffect(() => {
        let id = 0;
        if (visible) {
            switch (status) {
                case statusCase.entry:
                    id = window.setTimeout(() => setStatus(statusCase.entryActive), 0);
                    break;
                case statusCase.entryActive:
                    id = window.setTimeout(() => setStatus(statusCase.entryDone), time);
                    setStatus(statusCase.entryActive);
                    break;
                case statusCase.entryDone:
                    break;
                default:
                    setStatus(statusCase.entry);
                    setShow(true);
                    break;
            }
        } else {
            switch (status) {
                case statusCase.exit:
                    id = window.setTimeout(() => setStatus(statusCase.exitActive), 0);
                    break;
                case statusCase.exitActive:
                    id = window.setTimeout(() => setStatus(statusCase.exitDone), time);
                    setStatus(statusCase.exitActive);
                    break;
                case statusCase.exitDone:
                    if (show) {
                        onExitDone();
                    }
                    setShow(false);
                    break;
                default:
                    setStatus(statusCase.exit);
                    break;
            }
        }
        return () => {
            window.clearTimeout(id);
        };
    }, [visible, time, status, show, onExitDone]);

    if (children && (show || keepOnExit)) {
        return (
            <React.Fragment>
                {React.Children.map(children, child => {
                    let { className } = child.props;
                    if (transitionClassName) {
                        className = classnames(className, `${transitionClassName}-${status}`, {
                            [transitionClassName]: transitionClassName !== className,
                        });
                    }
                    return React.cloneElement(child, { className });
                })}
            </React.Fragment>
        );
    } else {
        return null;
    }
};

export default TransitionWrap;
