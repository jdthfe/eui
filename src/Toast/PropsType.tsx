import { TransitionWrapProps } from '../TransitionWrap/PropsType';
import { PortalProps } from '../Portal/PropsType';
import { CoverWithTransitionWrap } from '../Cover/PropsType';

export interface ToastProps
    extends PortalProps,
        TransitionWrapProps,
        React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    /** cover's props */
    coverProps?: CoverWithTransitionWrap;
}

export interface ToastPropsWithModel extends ToastProps {
    /** Cover will block page clicks */
    noCover?: boolean;
    /** duration */
    duration?: number;
}
