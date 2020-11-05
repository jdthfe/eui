import Radio from './Radio';

import { useRadio } from './use';

const RadioExport = Radio as typeof Radio & {
    useRadio: typeof useRadio;
};

RadioExport.useRadio = useRadio;

export default RadioExport;
