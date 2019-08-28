import { useState, useCallback, useEffect } from 'react';
import { UseInputOption } from './PropsType';

export const useInput = (opt: UseInputOption = {}) => {
    const { initialValue = '', validationRules } = opt;
    const [value, setValue] = useState(initialValue);

    const [validated, setValidated] = useState(true);
    const [message, setMessage] = useState<React.ReactNode>();

    const _onChange = useCallback(e => {
        const val = e.currentTarget.value;
        setValue(val);
    }, []);

    useEffect(() => {
        if (validationRules) {
            const obj = validationRules.find(item => item.reg.test(String(value)));
            const { validated: findValidated, message: findMessage } = obj || {
                validated: false,
                message: '',
            };
            setValidated(findValidated);
            setMessage(findMessage);
        }
    }, [validationRules, value]);

    return {
        value,
        message,
        setValue,
        validated,
        bind: {
            value,
            _setValue: setValue,
            _onChange,
            _validated: validated,
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
