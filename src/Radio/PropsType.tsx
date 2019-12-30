import { UseRadioReturn } from './use';

export interface RadioProps
    extends React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {
    /** checked */
    checked?: boolean;
    /** radio value */
    label?: string | string[] | number;
    /** change value for useState */
    _onChange?: UseRadioReturn['bind']['_onChange'];
    /** whether disabled */
    disabled?: boolean;
}

export interface UseRadioOption {
    /** initial value */
    initialValue?: RadioProps['value'];
}
