import { TouchFeedbackProps } from '../TouchFeedback/PropsType';

export interface ButtonProps
    extends TouchFeedbackProps,
        React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
    /** 按钮主题。自定义按钮颜色时请勿传值 */
    theme?: 'primary' | 'secondary' | 'customize';
    /** 尺寸 */
    size?: 's' | 'm' | 'l';
    /** 幽灵按钮 */
    ghost?: boolean;
    /** 行内按钮 */
    inline?: boolean;
    /** 矩形按钮 */
    rectangle?: boolean;
}
