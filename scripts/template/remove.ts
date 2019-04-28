import components from '../../site/until/components';
import fs from 'fs';
import inquirer from 'inquirer';

import { getProjectUrl, EOL } from '../helpers';

const cpInfo: Pick<CpInfo, 'name'> = { name: '' };
interface CpInfo {
    name: string;
    confirm: boolean;
}

async function userInput() {
    const cpList: string[] = [];
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
                message: 'Are you sure you want to delete it?',
                default: false,
            },
        ])
        .then(({ name, confirm }: CpInfo) => {
            if (confirm) {
                console.log('...Removing');
                console.log(name);
            } else {
                throw '> Canceled';
            }
            cpInfo.name = name;
        });
}

function deleteFolderRecursive(path: string) {
    if (fs.existsSync(path)) {
        fs.readdirSync(path).forEach(function(file) {
            var curPath = path + '/' + file;
            if (fs.statSync(curPath).isDirectory()) {
                deleteFolderRecursive(curPath);
            } else {
                fs.unlinkSync(curPath);
            }
        });
        fs.rmdirSync(path);
    }
}

function removeTemplate() {
    return new Promise((res, rej) => {
        try {
            const { name } = cpInfo;
            const NameUrl = ['src', name];
            deleteFolderRecursive(getProjectUrl(...NameUrl));
            res();
        } catch (err) {
            console.log('remove template fail !');
            rej(err);
        }
    });
}

function deleteCode(reg: string, content: string): string {
    return content
        .split(EOL)
        .filter(item => !item.includes(reg))
        .join(EOL);
}

function removeTemplateInCode() {
    const { name } = cpInfo;

    const indexUrl = getProjectUrl('src', 'index.tsx');
    const componentIndex = fs.readFileSync(indexUrl, 'utf8');
    const newIndex = deleteCode(`'./${name}'`, componentIndex);
    fs.writeFileSync(indexUrl, newIndex, 'utf8');

    const styleUrl = getProjectUrl('src', 'scss.tsx');
    const componentStyle = fs.readFileSync(styleUrl, 'utf8');
    const newStyle = deleteCode(`'./${name}/style'`, componentStyle);
    fs.writeFileSync(styleUrl, newStyle, 'utf8');

    const typeListUrl = getProjectUrl('site', 'until', 'components.tsx');
    fs.writeFileSync(
        typeListUrl,
        `export default ${JSON.stringify(components.filter(item => item.name !== name))}`,
        'utf8',
    );
}

/**
 * Main
 */
(async () => {
    try {
        await userInput();
        removeTemplateInCode();
        removeTemplate();
        console.log('> Congratulations, remove src success !!!');
    } catch (err) {
        console.log(err);
    }
})();
