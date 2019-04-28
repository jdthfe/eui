import path from 'path';
import { platform } from 'os';

export function getProjectUrl(...str: string[]) {
    return path.join(__dirname, '../', ...str);
}

export const EOL = platform() === 'win32' ? '\r\n' : '\n';
// eslint-disable-next-line @typescript-eslint/no-var-requires
export const pkg = require(getProjectUrl('package.json'));
