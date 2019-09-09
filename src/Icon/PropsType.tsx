export interface IconProps extends React.SVGProps<SVGSVGElement> {
    /** Select the icon you want to show */
    value:
        | 'alert'
        | 'arrow'
        | 'check'
        | 'close'
        | 'closeFilled'
        | 'current'
        | 'eyeClose'
        | 'eyeOpen'
        | 'loading'
        | 'more'
        | 'plus'
        | 'pwd'
        | 'pwdOpen'
        | 'rarrow'
        | 'remind'
        | 'selected'
        | 'successful'
        | 'time'
        | 'tip'
        | 'uncheck';
    /** Ionc's Size */
    size?: 'xs' | 's' | 'm' | 'l' | 'xl';
}
