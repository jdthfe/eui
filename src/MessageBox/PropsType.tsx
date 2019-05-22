import { TransitionWrapProps } from '../TransitionWrap/PropsType';
import { PortalProps } from '../Portal/PropsType';
import { ButtonProps } from '../Button/PropsType';
import { CoverProps } from '@src/Cover/PropsType';

export interface MessageBoxProps
    extends PortalProps,
        TransitionWrapProps,
        React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    /** Title */
    title?: string;
    /** ButtonProps list，When `multiLine = false`, the button is rendered from left to right */
    buttons?: ButtonProps[];
    /** Let each button take a single line */
    multiLine?: boolean;
    /** Hidden the line before buttons */
    hiddenline?: boolean;
    /** Callback on click the cross button. When the value is empty, the button is not displayed  */
    onClickCancel?: () => void;
}

export interface MessageBoxCommen extends MessageBoxProps {
    /** Cover will block page clicks */
    noCover?: boolean;
    /** CoverProps */
    coverProps?: CoverProps;
}
export interface MessageBoxConfirmProps {
    confirmButton?: ButtonProps;
    confirmCallback?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => boolean | void;
    confirmText?: string;
}
export interface MessageBoxCancelProps {
    cancelButton?: ButtonProps;
    cancelCallback?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => boolean | void;
    cancelText?: string;
}

export interface MessageBoxDefault extends MessageBoxProps, MessageBoxProps {}
export interface MessageBoxAlert extends MessageBoxProps, MessageBoxProps, MessageBoxConfirmProps {}
export interface MessageBoxConfirm
    extends MessageBoxProps,
        MessageBoxProps,
        MessageBoxConfirmProps,
        MessageBoxCancelProps {}
