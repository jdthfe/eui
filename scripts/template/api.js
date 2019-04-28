const components = require('../../site/until/components').default;
const fs = require('fs');
const inquirer = require('inquirer');

const { getProjectUrl, EOL } = require('../helpers.ts');

const cp = {
    index: '',
    PropsType: '',
};
const cpInfo = { name: '' };

async function userInput() {
    const cpList = [];
    components.map(item => cpList.push(item.name));

    return inquirer
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
        .then(({ name, confirm }) => {
            if (confirm) {
                console.log(`...${name}'s Api Generating`);
            } else {
                throw '> Loading';
            }
            cpInfo.name = name;
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

function getDefaultVal(str) {
    if (str === void 0) {
        return '-';
    }
    if (str === '') {
        str = "''";
    }
    return '`' + str + '`';
}

function mapPropsToTable(propStr, indexStr) {
    const Propsreg = new RegExp(/(\w+)(\?)*:(\s)*(.*)(?=;)/g),
        expReg = new RegExp(/(?<=\/\*\*)(\s|.)*?(?=\*\/)/g),
        valReg = new RegExp(/(^\w+)(\?)*(:|\s)*(.*$)/),
        defaultSecReg = new RegExp(/(?<=const {)(.|\s)*?(?=} = props)/);
    const table = [];
    const exp = propStr.match(expReg) || [];
    const defaultSec = (indexStr.match(defaultSecReg) || [])[0];
    const tableMd = [`|属性|说明|类型|默认值|必填|`, `| - | - | - | - | - |`];
    (propStr.match(Propsreg) || []).map((item, index) => {
        const [, r1 = 'find key fail', r2 = false, , r4 = 'find type fail'] = item.match(valReg) || [];
        const defaultReg = new RegExp(`(${r1}) = (.+?)(,| })`);
        const tableItem = {
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
