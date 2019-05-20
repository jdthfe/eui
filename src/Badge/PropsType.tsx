export interface BadgeProps extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLSpanElement>, HTMLSpanElement> {
    /** the size of Badge : large or small */
    size?: 'large' | 'small';

    /** the maximum of number */
    max?: number;

    /** Is it in a corner? */
    corner?: boolean;

    /** only one point ? */
    dot?: boolean;

    /** the num or text, ${max}+: when the num is gt the max,  hidden when it is 0.*/
    text?: any;
}
