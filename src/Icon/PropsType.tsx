export interface IconProps extends React.SVGProps<SVGSVGElement> {
    /** Select the icon you want to show */
    value: 'addcart' | 'alipay' | 'close' | 'loading' | 'remind' | 'selected' | string;
    /** Ionc's Size */
    size?: 'xs' | 's' | 'm' | 'l' | 'xl';
}
