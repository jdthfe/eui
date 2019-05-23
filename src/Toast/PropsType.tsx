import { TransitionWrapProps } from '../TransitionWrap/PropsType';
import { PortalProps } from '../Portal/PropsType';
import { CoverWithTransitionWrap } from '../Cover/PropsType';

export interface ToastPropsWithModel
    extends PortalProps,
        TransitionWrapProps,
        React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    coverProps?: CoverWithTransitionWrap;
}

export interface ToastProps extends ToastPropsWithModel {
    /** Cover will block page clicks */
    noCover?: boolean;
    /** duration */
    duration?: number;
}
