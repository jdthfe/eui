export interface PortalProps {
    /** Mounted node */
    mountNode?: Element | null;
}

export interface PortalPropsWithChildren extends PortalProps {
    /** children */
    children: React.ReactNode | React.ReactNode[];
}
