import { PortalProps } from '../Portal/PropsType';
import { TransitionWrapProps } from '../TransitionWrap/PropsType';
import { CoverWithTransitionWrap } from '../Cover/PropsType';

export interface PopoverPropsType
    extends PortalProps,
        TransitionWrapProps,
        React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    /** Anchor element of Popover */
    anchorEl: HTMLElement | null;
    /** The direction of Popover relative to the anchor element */
    dir: 'top-left' | 'top-center' | 'top-right' | 'bottom-left' | 'bottom-center' | 'bottom-right';
    /** When the value is empty or false, the cover is not displayed. On click cover, **return `false` to prvent Message's close** */
    onClickCover?: (() => void | boolean) | boolean;
    /** Whether the arrow is included or not */
    hasArrow?: boolean;
    /** Cover's props */
    coverProps?: CoverWithTransitionWrap;
}
