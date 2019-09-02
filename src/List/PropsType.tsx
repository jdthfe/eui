export interface ListProps extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    /** list header */
    renderHeader?: string;
    /** list footer */
    renderFooter?: string;
}

export interface ListItemPropsType {
    /** list order*/
    index?: number | undefined;
    /** thumbnail*/
    thumb?: React.ReactNode;
    /** extra content*/
    extra?: React.ReactNode;
    children?: React.ReactNode | null;
    /** Whether a newline*/
    wrap?: boolean;
    /** disable click*/
    disabled?: boolean;
    /** the style when you click*/
    activeStyle?: React.CSSProperties;
    /** click callback*/
    onClick?: (e: React.MouseEvent, i: number | undefined) => void;
    /** component class*/
    className?: string;
    /** direction of arrow*/
    arrow?: 'horizontal' | 'up' | 'down' | 'empty';
    /** child elements align*/
    align?: 'top' | 'middle' | 'bottom';
}

export interface BriefProps {
    children?: React.ReactNode;
    /**Brief style*/
    style?: React.CSSProperties;
}
