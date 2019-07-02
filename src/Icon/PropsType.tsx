export interface IconProps extends React.SVGProps<SVGSVGElement> {
    /** Select the icon you want to show */
    value:
        | 'alert'
        | 'arrow'
        | 'close'
        | 'eyeClose'
        | 'eyeOpen'
        | 'loading'
        | 'more'
        | 'remind'
        | 'selected'
        | 'successful';
    /** Ionc's Size */
    size?: 'xs' | 's' | 'm' | 'l' | 'xl';
}
