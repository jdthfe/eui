type RadioValue = any;
export interface RadioProps
    extends React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {
    /** binding value */
    value?: RadioValue;
    /** radio value */
    label?: RadioValue;
    /** before radio*/
    beforeRadio?: React.ReactNode;
    /** change value for useState */
    onChange?: (e: any) => void;
    _onChange?: (e: any) => void;
    /** whether disabled */
    disabled?: boolean;
}

export interface UseRadioOption {
    /** set binding value function */
    value?: any;
    /** set binding value function */
    setValue?: any;
    /** initial value */
    initLabel?: RadioProps['value'];
}
