import componentIndex from '../../site/_util/componentIndex';
import fs from 'fs';
import inquirer from 'inquirer';

import { getProjectUrl, EOL, colorLog } from '../helpers';

const cpt: Pick<Cpt, 'name'> = { name: '' };
interface Cpt {
    name: string;
    confirm: boolean;
}

function userInput() {
    const cpList: string[] = [];
    componentIndex.map(item => cpList.push(item.name));
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
        .then(obj => {
            const { name, confirm } = obj as Cpt;
            if (confirm) {
                colorLog(`...${name} Removing`, 'yellow');
            } else {
                throw '> Canceled';
            }
            cpt.name = name;
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

function deleteFile() {
    return new Promise((res, rej) => {
        try {
            const { name } = cpt;
            const NameUrl = ['src', name];
            deleteFolderRecursive(getProjectUrl(...NameUrl));
            res();
        } catch (err) {
            rej('remove template fail !');
        }
    });
}

function deleteCode(reg: string, content: string): string {
    return content
        .split(EOL)
        .filter(item => !item.includes(reg))
        .join(EOL);
}

function removeCptCodeInSpecifiedFile() {
    const { name } = cpt;

    const indexUrl = getProjectUrl('src', 'index.tsx');
    const components = fs.readFileSync(indexUrl, 'utf8');
    const newIndex = deleteCode(`'./${name}'`, components);
    fs.writeFileSync(indexUrl, newIndex, 'utf8');

    const styleUrl = getProjectUrl('src', 'scss.tsx');
    const componentStyle = fs.readFileSync(styleUrl, 'utf8');
    const newStyle = deleteCode(`'./${name}/style'`, componentStyle);
    fs.writeFileSync(styleUrl, newStyle, 'utf8');

    const typeListUrl = getProjectUrl('site', '_util', 'componentIndex.tsx');
    fs.writeFileSync(
        typeListUrl,
        `export default ${JSON.stringify(componentIndex.filter(item => item.name !== name))}`,
        'utf8',
    );
}

/**
 * Main
 */
(async () => {
    try {
        await userInput();
        removeCptCodeInSpecifiedFile();
        deleteFile();
        colorLog('> Congratulations, remove src success !!!', 'green');
    } catch (err) {
        colorLog(err, 'red');
    }
})();
