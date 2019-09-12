export interface IconProps extends React.SVGProps<SVGSVGElement> {
    /** Select the icon you want to show */
    value:
        | 'addCircle'
        | 'alert'
        | 'arrow'
        | 'close'
        | 'delete'
        | 'download'
        | 'edit'
        | 'eyeClose'
        | 'eyeOpen'
        | 'loading'
        | 'more'
        | 'remind'
        | 'selected'
        | 'share'
        | 'successful';
    /** Ionc's Size */
    size?: 'xs' | 's' | 'm' | 'l' | 'xl';
}
