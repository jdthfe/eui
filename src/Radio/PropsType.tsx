type RadioValue = any;
export interface RadioProps<T>
    extends React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {
    /** binding value */
    value?: RadioValue;
    /** radio value */
    label?: T;
    /** before radio*/
    beforeRadio?: React.ReactNode;
    /** change value for useState */
    onChange?: (e: any) => void;
    _onChange?: (e: any) => void;
    /** whether disabled */
    disabled?: boolean;
}

export interface UseRadioOption<T> {
    /** set binding value function */
    value: T;
    /** set binding value function */
    setValue: React.Dispatch<React.SetStateAction<T>>;
    /** initial value */
    initLabel?: RadioProps<T>['value'];
}
