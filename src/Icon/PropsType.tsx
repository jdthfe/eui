export interface IconProps extends React.SVGProps<SVGSVGElement> {
    /** Select the icon you want to show */
    value: 'addcart' | 'alert' | 'alipay' | 'close' | 'loading' | 'remind' | 'selected' | 'successful' | 'test';
    /** Ionc's Size */
    size?: 'xs' | 's' | 'm' | 'l' | 'xl';
}
