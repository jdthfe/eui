import { TransitionWrapProps } from '../TransitionWrap/PropsType';
import { PortalProps } from '../Portal/PropsType';
import { ButtonProps } from '../Button/PropsType';
import { CoverWithTransitionWrap } from '@src/NewCover/PropsType';

export interface MessageBoxProps
    extends PortalProps,
        TransitionWrapProps,
        React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    /** Title */
    title?: string;
    /** ButtonProps list，When `multiLine = false`, the button is rendered from left to right */
    buttons?: ButtonProps[];
    /** Let each button take a single line */
    multiLineButtons?: boolean;
    /** Hidden the line before buttons */
    hiddenline?: boolean;
    /** Callback on click the cross button. When the value is empty, the button is not displayed  */
    onClickCloseIcon?: () => void;
    /** CoverProps */
    coverProps?: CoverWithTransitionWrap;
}

export interface MessageBoxCommen extends MessageBoxProps {
    /** Callback on click the cross button. When the value is empty, the button is not displayed  */
    onClickCloseIcon?: () => void | boolean;
    /** On click cover, return `true` to prvent  */
    preventClickCover?: boolean;
    /** On click cover, return `true` to prvent  */
    onClickCover?: () => void | boolean;
    /** Cover will block page clicks */
    noCover?: boolean;
}

export interface MessageBoxConfirmProps {
    confirmButton?: ButtonProps;
    confirmCallback?: () => void | boolean;
    confirmChildren?: React.ReactNode;
}
export interface MessageBoxCancelProps {
    cancelButton?: ButtonProps;
    cancelCallback?: () => void | boolean;
    cancelChildren?: React.ReactNode;
}

export interface MessageBoxAlert extends MessageBoxCommen, MessageBoxConfirmProps {}
export interface MessageBoxConfirm
    extends MessageBoxProps,
        MessageBoxProps,
        MessageBoxConfirmProps,
        MessageBoxCancelProps {}
