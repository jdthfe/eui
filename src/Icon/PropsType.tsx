export interface IconProps extends React.SVGProps<SVGSVGElement> {
    /** Select the icon you want to show */
    value:
        | 'addcart'
        | 'alert'
        | 'alipay'
        | 'close'
        | 'closeFilled'
        | 'loading'
        | 'pwd'
        | 'pwdOpen'
        | 'remind'
        | 'selected'
        | 'successful'
        | 'test'
        | string;
    /** Ionc's Size */
    size?: 'xs' | 's' | 'm' | 'l' | 'xl';
}
