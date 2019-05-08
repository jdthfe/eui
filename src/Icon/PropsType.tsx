export interface IconProps extends React.SVGProps<SVGSVGElement> {
    /** 图标名称 */
    value: 'addcart' | 'alipay' | 'close' | 'remind' | 'selected' | string;
    /** 尺寸 */
    size?: 'xs' | 's' | 'm' | 'l' | 'xl';
}
