export interface RadioProps
    extends React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {
    /** binding value */
    value?: string | string[] | number;
    /** radio value */
    label?: string | string[] | number;
    /** change value for useState */
    onChange?: (e: any) => void;
    _onChange?: (e: any) => void;
    /** whether disabled */
    disabled?: boolean;
}

export interface UseRadioOption {
    /** set binding value function */
    setValue?: any;
    /** initial value */
    initLabel?: RadioProps['value'];
}
