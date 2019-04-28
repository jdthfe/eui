const components = require('../../site/until/components').default;
const fs = require('fs');
const inquirer = require('inquirer');

const { getProjectUrl, EOL } = require('../helpers');

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
                message: 'Are you sure you want to delete it?',
                default: false,
            },
        ])
        .then(({ name, confirm }) => {
            if (confirm) {
                console.log('...Removing');
                console.log(name);
            } else {
                throw '> Canceled';
            }
            cpInfo.name = name;
        });
}

function deleteFolderRecursive(path) {
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

function deleteCode(reg, content) {
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
