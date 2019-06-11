import { TransitionWrapProps } from '../TransitionWrap/PropsType';
import { PortalProps } from '../Portal/PropsType';
import { ButtonProps } from '../Button/PropsType';
import { CoverWithTransitionWrap } from '../Cover/PropsType';

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

export interface MessageBoxPropsWithModel extends MessageBoxProps {
    /** Callback on click the cross button. When the value is empty, the button is not displayed  */
    onClickCloseIcon?: () => void | boolean;
    /** Prevent click cover  */
    preventClickCover?: boolean;
    /** On click cover, return `true` to prvent Message's close  */
    onClickCover?: () => void | boolean;
    /** Cover will block page clicks */
    noCover?: boolean;
}

export interface MessageBoxConfirmProps {
    /** confirmButton’s props */
    confirmButton?: ButtonProps;
    /** confirmButton’s callback, return `true` to prvent Message's close*/
    confirmCallback?: () => void | boolean;
    /** confirmButton’s children */
    confirmChildren?: React.ReactNode;
}
export interface MessageBoxCancelProps {
    /** cancelButton’s props */
    cancelButton?: ButtonProps;
    /** cancelButton’s callback, return `true` to prvent Message's close*/
    cancelCallback?: () => void | boolean;
    /** cancelButton’s children */
    cancelChildren?: React.ReactNode;
}

export interface MessageBoxAlert extends MessageBoxPropsWithModel, MessageBoxConfirmProps {}
export interface MessageBoxConfirm extends MessageBoxPropsWithModel, MessageBoxConfirmProps, MessageBoxCancelProps {}
