export interface TabsProps extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    /** default selected index value=0 */
    activeIndex?: number;

    /** position of the tabs */
    position?: 'top' | 'right' | 'bottom' | 'left';

    /** Whether the tab option is full screen， when flex is true, divide the width */
    flex?: boolean;

    /** The tabs option, type is any */
    tabs: any;

    /** when click one tab option, whether animated is allowed */
    animated?: boolean;
}
