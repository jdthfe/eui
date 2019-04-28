import { PortalProps } from '../Portal/PropsType';
import { TransitionWrapProps } from '../TransitionWrap/PropsType';

export interface PopoverPropsType
    extends PortalProps,
        TransitionWrapProps,
        React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    /** 展示popover的元素 */
    anchorEl: any;
    /** dir ：popover的展示方向；包括 上左、上中、上右、下左、下中、下右 */
    dir: 'top-left' | 'top-center' | 'top-right' | 'bottom-left' | 'bottom-center' | 'bottom-right';
    /** popover 消失的时候回调函数 */
    onClose?: () => void;
    /** 是否包含箭头 默认是false */
    hasArrow?: boolean;
}
