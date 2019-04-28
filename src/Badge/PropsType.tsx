export interface BadgeProps extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLSpanElement>, HTMLSpanElement> {
    /** 角标的大小 large 或者 small */
    size?: 'large' | 'small';

    /** 数字的最大值 */
    max?: number;

    /** 是否置于角落 */
    corner?: boolean;

    /** 是否只展示一个点 */
    dot?: boolean;

    /** 展示的数字或文案，当为数字的时候，大于max展示 ${max}+， 为0时隐藏 */
    text?: any;
}
