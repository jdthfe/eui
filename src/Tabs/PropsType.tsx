export interface TabProps extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    index?: number;
    disabled?: boolean;
    activeIndex?: number;
}

export interface TabsProps extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    activeIndex?: number;
    centerMode?: boolean;
    scrollable?: boolean;
    position?: 'top' | 'right' | 'bottom' | 'left';
    flex?: boolean;
    // onChange?: (index: number) => void;
}

export interface TabContainerProps
    extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    index?: number;
    activeIndex?: any;
}

export interface TabsGroupProps extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    animated?: boolean;
    activeIndex?: number;
    centerMode?: boolean;
    position?: 'top' | 'right' | 'bottom' | 'left';
    scrollable?: boolean;
    /** tabs项是否均等分 */
    flex?: boolean;
}
