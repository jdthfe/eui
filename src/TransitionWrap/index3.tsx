import React, { useCallback, useEffect, useRef } from 'react';
import classnames from 'classnames';
import { TransitionStatus, TransitionWrapPropsWithChildren } from './PropsType';

import { Variable } from '../_util/';
const { transitionTime } = Variable;

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
        time = transitionTime,
        visible = false,
        keepOnExit = false,
        transitionClassName = 'transition',
        onExitDone = () => {},
        onEntryDone = () => {},
    } = props;

    // let status: TransitionStatus = visible ? statusCase.entryDone : statusCase.exitDone;
    const [status, setStatus] = React.useState(visible ? statusCase.entryDone : statusCase.exitDone);
    const [show, setShow] = React.useState(true);

    console.log(status, 'status---');

    const showRef = useRef(visible);
    const statusRef = useRef(visible ? statusCase.entryDone : statusCase.exit);

    const makeShow = useCallback((v: boolean) => {
        showRef.current = v;
        setShow(v);
    }, []);

    const makeStatus = useCallback((v: TransitionStatus) => {
        statusRef.current = v;
        setStatus(v);
        // status = visible ? statusCase.entryDone : statusCase.exitDone;
    }, []);

    useEffect(() => {
        makeShow(visible);
        return () => {
            // console.log(statusRef, 'statusRef');
            console.log(showRef, 'showRef');
            console.log('makeShow');
        };
    }, [makeShow, visible]);
    const showEle = useCallback(() => {
        switch (status) {
            case statusCase.entry:
                window.setTimeout(() => makeStatus(statusCase.entryActive), 0);
                break;
            case statusCase.entryActive:
                window.setTimeout(() => makeStatus(statusCase.entryDone), 1000);
                break;
            case statusCase.entryDone:
                break;
            default:
                // makeShow(true);
                makeStatus(statusCase.entry);
                break;
        }
    }, [makeStatus, status]);

    const hideEle = useCallback(() => {
        console.log(status, '====statusRef.current=====');

        switch (status) {
            case statusCase.exit:
                // makeShow(false);
                window.setTimeout(() => makeStatus(statusCase.exitActive), 0);
                break;
            case statusCase.exitActive:
                window.setTimeout(() => makeStatus(statusCase.exitDone), 1000);
                break;
            case statusCase.exitDone:
                break;
            default:
                makeStatus(statusCase.exit);
                break;
        }
    }, [makeStatus, status]);

    useEffect(() => {
        // console.log(statusRef, 'statusRef');
        // console.log(showRef, 'showRef');
        // showEle();
        if (visible) {
            showEle();
        } else {
            hideEle();
        }
        // hideEle();
        // console.log('hello');

        // console.log(statusRef, 'statusRef2');
        // console.log(showRef, 'showRef2');

        if (showRef.current === false && statusRef.current === statusCase.exitDone) {
            // console.error('exe onexit');
            onExitDone();
        }
        if (showRef.current === true && statusRef.current === statusCase.entryDone) {
            // console.error('exe onentry');
            onEntryDone();
        }
        // return () => {
        //     window.clearTimeout(id);
        // if (showRef.current === false && statusRef.current === statusCase.exitDone) {
        //     // console.error('exe onexit');
        //     onExitDone();
        // }
        // if (showRef.current === true && statusRef.current === statusCase.entryDone) {
        //     // console.error('exe onentry');
        //     onEntryDone();
        // }
        // };
        return () => {
            console.log('callback');
        };
    }, [hideEle, onEntryDone, onExitDone, showEle, visible]);

    if (children && (show || keepOnExit)) {
        return (
            <React.Fragment>
                {React.Children.map(children, child => {
                    let { className } = child.props;
                    className = classnames(className, `${transitionClassName}-${status}`, {
                        [transitionClassName]: transitionClassName !== className,
                    });
                    return React.cloneElement(child, { className });
                })}
            </React.Fragment>
        );
    } else {
        return null;
    }
};

export default TransitionWrap;
