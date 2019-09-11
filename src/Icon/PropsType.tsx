export interface IconProps extends React.SVGProps<SVGSVGElement> {
    /** Select the icon you want to show */
    value:
        | 'addCircle'
        | 'alert'
        | 'arrow'
        | 'check'
        | 'close'
        | 'closeFilled'
        | 'current'
        | 'delete'
        | 'edit'
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
