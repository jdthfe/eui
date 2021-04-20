/* eslint-disable react-hooks/rules-of-hooks */
import React, { Fragment, useCallback, useEffect, useMemo, useRef, useState } from 'react';
import classnames from 'classnames';
import { prefix, Variable, removeNode } from '../_util/';
import usePortal from '../Portal/index3';
import { ToastProps, ToastPropsWithModel } from './PropsType';
import ReactDOM from 'react-dom';
import TransitionWrap from '../TransitionWrap/index3';
import { Cover, Icon, WhiteSpace } from '@src/index';

const prefixCls = `${prefix}-toast`;
const { transitionFade, defaultDuration } = Variable;

const useToast = (props?: ToastPropsWithModel) => {
    const {
        mountNode,
        children,
        className,
        coverProps = {},
        // TransitionWrap
        visible,
        keepOnExit,
        time,
        onExitDone = () => {},
        onEntryDone = () => {},
        transitionClassName = transitionFade,
        ...resProps
    } = props || {};

    // console.log(visible, 'visible');

    // const {} = Object.assign({ ...props });

    // const ToastModal = () => {
    //     useEffect(() => {}, []);
    // };
    // const closeModel = useCallback(() => {
    // console.log('Effect close Model');
    // closePortal();
    // console.log(isOpen, 'closeModel  function value');

    // setTimeout(() => {
    //     console.log(isOpen, 'closeModel  function value timeout');
    // }, 4000);

    // ReactDOM.unmountComponentAtNode(div);
    // }, [closePortal]);

    const Toast = useCallback(
        (tostProps: ToastPropsWithModel) => {
            const {
                children,
                duration,
                //portal
                mountNode,

                // cover
                className,
                coverProps = {},

                // TransitionWrap

                time,
                visible,
                keepOnExit,
                onExitDone,
                onEntryDone = () => {},
                transitionClassName = transitionFade,
                ...resProps
            } = Object.assign({ ...props }, { ...tostProps });
            const cls = classnames(prefixCls, className);

            // const { isOpen, openPortal, closePortal, Portal } = usePortal({
            //     isOpen: visible,
            //     onOpen: onEntryDone,
            //     onClose: onExitDone,
            // });
            // useEffect(() => {
            //     if (!visible) {
            //         onExitDone();
            //     } else {
            //         onEntryDone();
            //     }
            // }, [onEntryDone, onExitDone, visible]);

            // useEffect(() => {
            //     if (duration) {
            //         setTimeout(() => {
            //             closePortal();
            //         }, duration);
            //     }
            // }, [closePortal, duration]);

            // <Fragment>
            {
                /* <Cover.Transition
                        transparent
                        visible={visible}
                        time={time}
                        onExitDone={onExitDone}
                        onEntryDone={onEntryDone}
                        keepOnExit={keepOnExit}
                        transitionClassName={transitionClassName}
                        {...coverProps}
                    /> */
            }

            // </Fragment>
            // );

            return (
                <TransitionWrap
                    visible={visible}
                    time={time}
                    onExitDone={onExitDone}
                    onEntryDone={onEntryDone}
                    keepOnExit={keepOnExit}
                    transitionClassName={transitionClassName}
                >
                    <Cover />
                    <div {...resProps} className={cls}>
                        {children}
                    </div>
                </TransitionWrap>
            );
        },
        [props],
    );

    // useEffect(() => {
    //     console.log('divRef isOpen change', isOpen);

    //     divRef.current = () => {
    //         ReactDOM.render(<Portal>hello</Portal>, div);
    //     };
    // }, [isOpen]);

    // const model = useCallback(() => {
    //     ReactDOM.render(<Toast >hello</Toast>, div);
    //     setTimeout(() => {
    //         closeModel();
    //     }, 1000);
    //     return closeModel;
    // }, [closeModel, div]);
    const { Portal, closePortal } = usePortal({
        isOpen: true,
    });

    const model = useCallback(
        (tostProps: ToastProps) => {
            const { duration, onExitDone, ...resProps } = Object.assign({ ...props, ...tostProps });

            const div = document.createElement('div');

            const close = () => {
                onExitDone && onExitDone();
                closePortal();
                ReactDOM.unmountComponentAtNode(div);
                removeNode(div);
            };

            const component = (
                <Portal>
                    <Toast {...resProps} visible={true} />
                </Portal>
            );

            ReactDOM.render(component, div);

            if (duration) {
                setTimeout(() => {
                    close();
                }, duration);
            }
            return close;
        },
        [closePortal, props],
    );

    // const success = useCallback(
    //     ({ children, ...restProps }: ToastPropsWithModel) => {
    //         return model({
    //             ...restProps,
    //             children: (
    //                 <Fragment>
    //                     <Icon size="xl" value="successful" fill="#fff" />
    //                     {children ? <WhiteSpace size="l" /> : null}
    //                     {children}
    //                 </Fragment>
    //             ),
    //         });
    //     },
    //     [model],
    // );

    // const alert = useCallback(
    //     ({ children, ...restProps }: ToastPropsWithModel) => {
    //         return model({
    //             ...restProps,
    //             children: (
    //                 <Fragment>
    //                     <Icon size="xl" value="alert" fill="#fff" />
    //                     {children ? <WhiteSpace size="l" /> : null}
    //                     {children}
    //                 </Fragment>
    //             ),
    //         });
    //     },
    //     [model],
    // );

    // const loading = useCallback(
    //     ({ children, ...restProps }: ToastPropsWithModel) => {
    //         return model({
    //             children: (
    //                 <Fragment>
    //                     <Icon size="xl" value="successful" fill="#fff" />
    //                     {children ? <WhiteSpace size="l" /> : null}
    //                     {children}
    //                 </Fragment>
    //             ),
    //             ...restProps,
    //         });
    //     },
    //     [model],
    // );

    const ToastObj = Toast as any & {
        model: typeof model;
        // success: typeof success;
        // alert: typeof alert;
        // loading: typeof loading;
    };

    ToastObj.model = model;
    // ToastObj.success = success;
    // ToastObj.alert = alert;
    // ToastObj.loading = loading;

    // return <Portal>toast</Portal>;

    return {
        Toast: ToastObj,
        // openPortal,
        // closePortal,
        // closeModel,
    };
};

export default useToast;
