import { useEffect, useRef, MutableRefObject, useCallback, ReactNode, useMemo, useState } from 'react';
import ReactDOM, { createPortal, findDOMNode } from 'react-dom';
import { prefix, Variable, removeNode } from '../_util/';
import useSSR from '../use/useSSR';
type HTMLElRef = MutableRefObject<HTMLElement>;
const usePortal: any = (
    {
        bindTo,
        isOpen: defaultIsOpen = false,
        onOpen,
        onClose,
    }: {
        bindTo?: HTMLElement | null;
        isOpen?: boolean;
        onOpen?: () => void;
        onClose?: () => void;
    } = {
        bindTo: null,
    },
) => {
    // 使用useRef创建ref对象，可以用来保存节点
    const { isServer, isBrowser } = useSSR();
    const [isOpen, makeOpen] = useState(defaultIsOpen);

    const open = useRef(isOpen);
    const portal = useRef(isBrowser ? document.createElement('div') : null) as HTMLElRef;

    useEffect(() => {
        if (isBrowser && !portal.current) portal.current = document.createElement('div');
    }, [isBrowser, portal]);

    const elToMountTo = useMemo(() => {
        if (isServer) return;
        return (bindTo && findDOMNode(bindTo)) || document.body;
    }, [isServer, bindTo]);

    const setOpen = useCallback((v: boolean) => {
        // workaround to not have stale `isOpen` in the handleOutsideMouseClick
        open.current = v;
        makeOpen(v);
    }, []);

    const openPortal = useCallback(() => {
        if (isServer) return;

        if (onOpen) onOpen();
        setOpen(true);
    }, [isServer, onOpen, setOpen]);

    const closePortal = useCallback(() => {
        if (isServer) return;
        if (onClose && open.current) onClose();
        if (open.current) setOpen(false);
        // ReactDOM.unmountComponentAtNode(portal.current);
        // if (portal.current) removeNode(portal.current);
    }, [isServer, onClose, setOpen]);

    useEffect(() => {
        if (isServer) return;
        if (!(elToMountTo instanceof HTMLElement) || !(portal.current instanceof HTMLElement)) return;

        // TODO: eventually will need to figure out a better solution for this.
        // Surely we can find a way to map onScroll/onWheel -> scroll/wheel better,
        // but for all other event handlers. For now this works.

        const node = portal.current;
        elToMountTo.appendChild(node);
        // handles all special case handlers. Currently only onScroll and onWheel

        return () => {
            removeNode(node as any);

            // elToMountTo.removeChild(node);
        };
    }, [isServer, elToMountTo, portal]);

    const Portal = useCallback(
        ({ children }: { children: ReactNode }) => {
            if (portal.current != null && children) return createPortal(children, portal.current);
            return null;
        },
        [portal],
    );

    return Object.assign([open.current, openPortal, closePortal, Portal, portal], {
        isOpen: open.current,
        openPortal,
        closePortal,
        Portal,
        portal,
    });
    // return children ? ReactDOM.createPortal(children, (<div id="ss_bannerimage" ref={refEle}></div>) as any) : null;
};
export default usePortal;
