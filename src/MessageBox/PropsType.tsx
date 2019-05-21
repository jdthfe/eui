import { TransitionWrapProps } from '../TransitionWrap/PropsType';
import { PortalProps } from '../Portal/PropsType';
import { ButtonProps } from '../Button/PropsType';

export interface MessageBoxPropsWithModel
    extends PortalProps,
        TransitionWrapProps,
        React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    title?: string;
    buttons?: ButtonProps[];
    multiLine?: boolean;
    /** Callback on click the cross button. When the value is empty, the button is not displayed  */
    onClickCancel?: () => void;
}

export interface MessageBoxProps extends MessageBoxPropsWithModel {
    /** duration */
    duration?: number;
    /** Cover will block page clicks */
    noCover?: boolean;
}
