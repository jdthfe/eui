import ReactDOM from 'react-dom';
import { PortalPropsWithChildren } from './PropsType';
import useSSR from '../use/useSSR';

const Portal = (props: PortalPropsWithChildren) => {
    const { isServer } = useSSR();
    const { mountNode, children } = props;

    let legalMountNode: Element;
    if (mountNode && typeof mountNode === typeof {} && mountNode.nodeType === 1) {
        legalMountNode = mountNode;
    } else {
        // console.log(`Can not find mountNode[${mountNode}], so use document.body`);
        legalMountNode = document.body;
    }
    if (isServer) return null;
    return children ? ReactDOM.createPortal(children, legalMountNode) : null;
};
export default Portal;
