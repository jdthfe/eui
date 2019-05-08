import path from 'path';
import { platform } from 'os';

export function getProjectUrl(...str: string[]) {
    return path.join(__dirname, '../', ...str);
}

export const EOL = platform() === 'win32' ? '\r\n' : '\n';
// eslint-disable-next-line @typescript-eslint/no-var-requires
export const pkg = require(getProjectUrl('package.json'));

export function colorLog(str: string, color?: 'red' | 'green' | 'yellow' | 'Blue') {
    const colors = {
        red: '\x1b[31m',
        green: '\x1b[32m',
        yellow: '\x1b[33m',
        Blue: '\x1b[34m',
    };
    console.log(color ? colors[color] : '', str);
}
