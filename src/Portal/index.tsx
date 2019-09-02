import ReactDOM from 'react-dom';
import { PortalPropsWithChildren } from './PropsType';

const Portal = (props: PortalPropsWithChildren) => {
    const { mountNode = document.body, children } = props;
    let legalMountNode: Element;
    if (mountNode && typeof mountNode === typeof {} && mountNode.nodeType === 1) {
        legalMountNode = mountNode;
    } else {
        // console.log(`Can not find mountNode[${mountNode}], so use document.body`);
        legalMountNode = document.body;
    }
    return children ? ReactDOM.createPortal(children, legalMountNode) : null;
};
export default Portal;
