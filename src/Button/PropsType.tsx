import { TouchFeedbackProps } from '../TouchFeedback/PropsType';

export interface ButtonProps
    extends TouchFeedbackProps,
        React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
    /** The theme of the component. Do not define when using custom colors */
    theme?: 'primary' | 'secondary' | 'customize';
    /** The size of the button */
    size?: 's' | 'm' | 'l';
    /** ghost style */
    ghost?: boolean;
    /** whether set as an inline button */
    inline?: boolean;
    /** Rectangular button  */
    rectangle?: boolean;
}
