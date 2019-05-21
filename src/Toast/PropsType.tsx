import { TransitionWrapProps } from '../TransitionWrap/PropsType';
import { PortalProps } from '../Portal/PropsType';

export interface ToastPropsWithModel
    extends PortalProps,
        TransitionWrapProps,
        React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> {}

export interface ToastProps extends ToastPropsWithModel {
    /** duration */
    duration?: number;
    /** Cover will block page clicks */
    noCover?: boolean;
}
