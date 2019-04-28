export interface FixTopProps extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    /** description */
    visible?: boolean;

    /** 是否显示关闭按钮 */
    showLeftIcon?: boolean;

    /** 可以在左侧展示特定图标 */
    leftIcon?: any;

    /** 是否显示关闭按钮 */
    showCloseIcon?: boolean;

    /** 关闭按钮的图标，不传展示一个标准的X */
    closeIcon?: any;
}
