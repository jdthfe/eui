import { useState, useCallback, useEffect, useRef } from 'react';
import { UseInputOption } from './PropsType';

export const useInput = (opt: UseInputOption = {}) => {
    const { initialValue = '', validationRules, validationTrigger } = opt;
    const [value, setValue] = useState(initialValue);
    const [message, setMessage] = useState<React.ReactNode>();
    const [validated, setValidated] = useState(true);
    const validationObj = useRef({
        validated: false,
        message,
    });

    const _onChange = useCallback(
        e => {
            const val = e.currentTarget.value;
            setValue(val);
            if (validationTrigger === 'change') {
                setValidated(validationObj.current.validated);
                setMessage(validationObj.current.message);
            }
        },
        [validationTrigger],
    );

    useEffect(() => {
        if (validationRules) {
            const obj = validationRules.find(item => item.reg.test(String(value)));
            if (obj) {
                validationObj.current.message = obj.message;
                validationObj.current.validated = obj.validated;
            }
            if (!validationTrigger) {
                setValidated(validationObj.current.validated);
                setMessage(validationObj.current.message);
            }
        }
    }, [validationRules, validationTrigger, value]);

    const [focus, setFocus] = useState(false);
    const _onFocus = useCallback(() => {
        setFocus(true);
    }, []);
    const _onBlur = useCallback(() => {
        setFocus(false);
        if (validationTrigger === 'blur') {
            setValidated(validationObj.current.validated);
            setMessage(validationObj.current.message);
        }
    }, [validationTrigger]);

    return {
        value,
        focus,
        setFocus,

        message,
        setValue,
        validated,
        bind: {
            value,
            _focus: focus,
            _setValue: setValue,
            _validated: validated,
            _onChange,
            _onFocus,
            _onBlur,
        },
    };
};
export type UseInputReturn = ReturnType<typeof useInput>;

export const useFocus = () => {
    const [focus, setFocus] = useState(false);
    const _onFocus = useCallback(() => {
        setFocus(true);
    }, []);
    const _onBlur = useCallback(() => {
        setFocus(false);
    }, []);

    return {
        focus,
        setFocus,
        _onFocus,
        _onBlur,
    };
};

export const useJoinFn = (...args: any[]) => {
    return useCallback(
        (e: any) => {
            if (args.length) {
                args.map(fn => {
                    try {
                        fn(e);
                    } catch (err) {
                        // console.log(err);
                    }
                });
            }
        },
        [args],
    );
};
