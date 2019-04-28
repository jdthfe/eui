export interface TouchFeedbackProps {
    /** 禁用 */
    disabled?: boolean;
    /** 点击时的属性名 */
    activeClassName?: string;
    /** 点击时的样式 */
    activeStyle?: React.CSSProperties;
}

export interface TouchFeedbackPropsWithChildren extends TouchFeedbackProps {
    /** 被包裹的唯一子组件 */
    children: React.ReactElement;
}
