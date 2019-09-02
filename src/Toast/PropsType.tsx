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
    /** Whether to hide toast's transparent cover, which will prevent touch event of the whole page */
    noCover?: boolean;
    /** Delay time to close, which units is second ( If set duration = 0, toast will not auto hide, you have to manually do it ) */
    duration?: number;
}
