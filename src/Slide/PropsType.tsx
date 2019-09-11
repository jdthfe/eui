import { TransitionWrapProps } from '../TransitionWrap/PropsType';
import { PortalProps } from '../Portal/PropsType';
import { CoverWithTransitionWrap } from '../Cover/PropsType';
export interface SlideProps
    extends PortalProps,
        TransitionWrapProps,
        React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    /** description */
    /** CoverProps */
    coverProps?: CoverWithTransitionWrap;
}
