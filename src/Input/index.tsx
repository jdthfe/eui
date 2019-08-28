import Input from './Input';

import { InputProps } from './PropsType';
import { useInput } from './use';

const inputExport = Input as ((props: InputProps) => JSX.Element) & {
    useInput: typeof useInput;
};

inputExport.useInput = useInput;

export default inputExport;
