export interface TouchFeedbackProps {
    /** disabled */
    disabled?: boolean;
    /** className applied to child when active */
    activeClassName?: string;
    /** style applied to child when active  */
    activeStyle?: React.CSSProperties;
}

export interface TouchFeedbackPropsWithChildren extends TouchFeedbackProps {
    /** children */
    children: React.ReactElement;
}
