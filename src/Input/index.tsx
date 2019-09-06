import Input from './Input';

import { useInput } from './use';

const inputExport = Input as typeof Input & {
    useInput: typeof useInput;
};

inputExport.useInput = useInput;

export default inputExport;
