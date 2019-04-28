import components from '../../site/until/components';
import fs from 'fs';
import inquirer from 'inquirer';

import { getProjectUrl, EOL } from '../helpers';

interface CpInfo {
    name: string;
    confirm: boolean;
}
interface CP {
    index: string;
    PropsType: string;
}
const cp: CP = {
    index: '',
    PropsType: '',
};
const cpInfo: Pick<CpInfo, 'name'> = { name: '' };

async function userInput() {
    const cpList: string[] = [];
    components.map(item => cpList.push(item.name));

    return new Promise((res, rej) => {
        inquirer
            .prompt([
                {
                    type: 'list',
                    name: 'name',
                    choices: cpList,
                    message: "Please selecte Component's name:",
                },
                {
                    type: 'confirm',
                    name: 'confirm',
                    message: 'Are you sure you want to get API?',
                    default: false,
                },
            ])
            .then(({ name, confirm }: CpInfo) => {
                if (confirm) {
                    console.log(`...${name}'s Api Generating`);
                } else {
                    throw '> Loading';
                }
                cpInfo.name = name;
                res();
            })
            .catch(() => {
                rej();
            });
    });
}

function getTemplate() {
    return new Promise((res, rej) => {
        try {
            const { name } = cpInfo;
            const cpUrl = ['src', name];
            cp.index = fs.readFileSync(getProjectUrl(...cpUrl, 'index.tsx'), 'utf8');
            cp.PropsType = fs.readFileSync(getProjectUrl(...cpUrl, 'PropsType.tsx'), 'utf8').replace(/NAME/g, name);
            res();
        } catch (err) {
            rej(err);
        }
    });
}

interface PorpItem {
    key: string;
    exp: string;
    type: string;
    default: string;
    needed: boolean;
}

function getDefaultVal(str: string): string {
    if (str === void 0) {
        return '-';
    }
    if (str === '') {
        str = "''";
    }
    return '`' + str + '`';
}

function mapPropsToTable(propStr: string, indexStr: string) {
    const Propsreg = new RegExp(/(\w+)(\?)*:(\s)*(.*)(?=;)/g),
        expReg = new RegExp(/(?<=\/\*\*)(\s|.)*?(?=\*\/)/g),
        valReg = new RegExp(/(^\w+)(\?)*(:|\s)*(.*$)/),
        defaultSecReg = new RegExp(/(?<=const {)(.|\s)*?(?=} = props)/);
    const table: PorpItem[] = [];
    const exp = propStr.match(expReg) || [];
    const defaultSec = (indexStr.match(defaultSecReg) || [])[0];
    const tableMd = [`|属性|说明|类型|默认值|必填|`, `| - | - | - | - | - |`];
    (propStr.match(Propsreg) || []).map((item, index) => {
        const [, r1 = 'find key fail', r2 = false, , r4 = 'find type fail'] = item.match(valReg) || [];
        const defaultReg = new RegExp(`(${r1}) = (.+?)(,| })`);
        const tableItem: PorpItem = {
            key: r1,
            exp: (exp[index] || '').replace(/(^\s|\s$)*/g, ''),
            type: r4,
            needed: !r2,
            default: ((defaultSec || '').match(defaultReg) || [])[2],
        };
        table.push(tableItem);
        tableMd.push(
            `|${tableItem.key}|${tableItem.exp}|\`${tableItem.type}\`|${getDefaultVal(tableItem.default)}|\`${
                tableItem.needed
            }\`|`,
        );
    });
    const readmeUrl = getProjectUrl('src', cpInfo.name, 'demo', 'readme.md');
    const readme = fs.readFileSync(readmeUrl, 'utf8');
    fs.writeFileSync(readmeUrl, readme + EOL + tableMd.join(EOL), 'utf8');
}

/**
 * Main
 */
(async () => {
    try {
        await userInput();
        await getTemplate();
        mapPropsToTable(cp.PropsType, cp.index);
        console.log('> Congratulations, generator API success !!!');
    } catch (err) {
        console.log(err);
    }
})();
