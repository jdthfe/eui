import { UseInputReturn } from './use';

export interface InputProps
    extends React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {
    /** Input's title */
    tag?: React.ReactNode;
    /** Before input */
    beforeInput?: React.ReactNode;
    /** After input */
    afterInput?: React.ReactNode;
    /** Hide eye icon */
    hideEye?: boolean;
    /** Hide clear icon */
    hideClear?: boolean;
    /** Validated result */
    _validated?: UseInputReturn['bind']['_validated'];
    /** change value for useState */
    _onChange?: UseInputReturn['bind']['_onChange'];
    /** Set value for useState */
    _setValue?: UseInputReturn['bind']['_setValue'];
    _focus?: UseInputReturn['bind']['_focus'];
    _onBlur?: UseInputReturn['bind']['_onBlur'];
    _onFocus?: UseInputReturn['bind']['_onFocus'];
}

export interface UseInputOption {
    /** initial value */
    initialValue?: InputProps['value'];
    /** validation trigger*/
    validationTrigger?: 'change' | 'blur';
    /** validation rules */
    validationRules?: {
        /** RegExp */
        reg: RegExp;
        /** The state of validated when `reg.test(inputValue) === true` */
        validated: boolean;
        /** The message `reg.test(inputValue) === true` */
        message: React.ReactNode;
    }[];
}
