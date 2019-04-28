export interface PortalProps {
    /** 被挂载的父元素 */
    mountNode?: Element;
}

export interface PortalPropsWithChildren extends PortalProps {
    /** 被包裹的唯一子节点 */
    children: React.ReactNode;
}
