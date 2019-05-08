import fs from 'fs';
import componentIndex from '../../site/_util/componentIndex';
/**
 * A collection of common interactive command line user interfaces.
 * @ref https://github.com/SBoudrias/Inquirer.js
 * @doc_zh https://juejin.im/entry/5937c73cac502e0068cf1171
 */
import inquirer from 'inquirer';

import { getProjectUrl, EOL, colorLog } from '../helpers';

const cpt: Cpt = { name: '', type: '' };
interface Cpt {
    name: string;
    type: string;
}
interface CptDir {
    'index.tsx': string;
    'PropType.tsx': string;
    'style_index.scss': string;
    'style_index.tsx': string;
    'demo_index.tsx': string;
    'demo_readme.md': string;
    // !tag new language
    'demo_readme.zh-CN.md': string;
    'tests_index.text.tsx': string;
    'tests_demo.text.tsx': string;
}
const cptDir: CptDir = {
    'index.tsx': '',
    'PropType.tsx': '',
    'style_index.scss': '',
    'style_index.tsx': '',
    'demo_index.tsx': '',
    'demo_readme.md': '',
    // !tag new language
    'demo_readme.zh-CN.md': '',
    'tests_index.text.tsx': '',
    'tests_demo.text.tsx': '',
};
async function userInput() {
    // const typeList = JSON.parse(typeListSource);
    const typeObject: {
        [key: string]: boolean;
    } = {};
    componentIndex.map((item: { name: string; type: string }) => (typeObject[item.type] = true));
    // cnt: Create a new type
    const cnt = 'Create a new type';
    const typeList = [...Object.keys(typeObject), cnt];
    return inquirer
        .prompt([
            {
                type: 'input',
                name: 'name',
                message: "Please input Component's name:",
                default: 'NewComponent',
            },
            {
                type: 'list',
                name: 'type',
                message: "Please choic Component's type:",
                choices: typeList,
                default: 'type1',
            },

            {
                when: answers => {
                    const { type } = answers as Cpt;
                    return type === cnt;
                },
                type: 'input',
                name: 'type',
                message: "Please input Type's name:",
                default: 'NewType',
            },
        ])
        .then(obj => {
            let { name, type } = obj as Cpt;
            if (fs.existsSync(getProjectUrl('src', name))) {
                colorLog(
                    'The component already exists. Please rename the component or use "yarn rm" to delete the previous.',
                    'red',
                );
                throw 'fail !';
            }
            name = name[0].toUpperCase() + name.slice(1, 9999);
            cpt.name = name;
            cpt.type = type;
        });
}

function readTemplate() {
    return new Promise((res, rej) => {
        try {
            const { name } = cpt;

            const cpUrl = ['scripts', 'template', 'NAME'];
            cptDir['index.tsx'] = fs
                .readFileSync(getProjectUrl(...cpUrl, 'index.tsx'), 'utf8')
                .replace(/-NAME/g, `-${name.toLowerCase()}`)
                .replace(/NAME/g, name);
            cptDir['PropType.tsx'] = fs
                .readFileSync(getProjectUrl(...cpUrl, 'PropsType.tsx'), 'utf8')
                .replace(/NAME/g, name);

            const styleUrl = ['scripts', 'template', 'NAME', 'style'];
            cptDir['style_index.scss'] = fs
                .readFileSync(getProjectUrl(...styleUrl, 'index.scss'), 'utf8')
                .replace(/NAME/g, name.toLowerCase());
            cptDir['style_index.tsx'] = fs.readFileSync(getProjectUrl(...styleUrl, 'index.tsx'), 'utf8');

            const demoUrl = ['scripts', 'template', 'NAME', 'demo'];
            cptDir['demo_index.tsx'] = fs
                .readFileSync(getProjectUrl(...demoUrl, 'index.tsx'), 'utf8')
                .replace(/NAME/g, name);
            cptDir['demo_readme.md'] = fs
                .readFileSync(getProjectUrl(...demoUrl, 'readme.md'), 'utf8')
                .replace(/NAME/g, name);
            // !tag new language
            cptDir['demo_readme.zh-CN.md'] = fs
                .readFileSync(getProjectUrl(...demoUrl, 'readme.zh-CN.md'), 'utf8')
                .replace(/NAME/g, name);

            const testsUrl = ['scripts', 'template', 'NAME', '__tests__'];
            cptDir['tests_demo.text.tsx'] = fs
                .readFileSync(getProjectUrl(...testsUrl, 'demo.test.tsx'), 'utf8')
                .replace(/NAME/g, name);
            cptDir['tests_index.text.tsx'] = fs
                .readFileSync(getProjectUrl(...testsUrl, 'index.test.tsx'), 'utf8')
                .replace(/NAME/g, name);
            res();
        } catch (err) {
            rej(err);
        }
    });
}

function writeTemplate() {
    return new Promise((res, rej) => {
        try {
            const { name } = cpt;

            const nameUrl = ['src', name];
            fs.mkdirSync(getProjectUrl(...nameUrl));
            fs.writeFileSync(getProjectUrl(...nameUrl, 'index.tsx'), cptDir['index.tsx'], 'utf8');
            fs.writeFileSync(getProjectUrl(...nameUrl, 'PropsType.tsx'), cptDir['PropType.tsx'], 'utf8');

            const styleUrl = [...nameUrl, 'style'];
            fs.mkdirSync(getProjectUrl(...styleUrl));
            fs.writeFileSync(getProjectUrl(...styleUrl, 'index.scss'), cptDir['style_index.scss'], 'utf8');
            fs.writeFileSync(getProjectUrl(...styleUrl, 'index.tsx'), cptDir['style_index.tsx'], 'utf8');

            const demoUrl = [...nameUrl, 'demo'];
            fs.mkdirSync(getProjectUrl(...demoUrl));
            fs.writeFileSync(getProjectUrl(...demoUrl, 'index.tsx'), cptDir['demo_index.tsx'], 'utf8');
            fs.writeFileSync(getProjectUrl(...demoUrl, 'readme.md'), cptDir['demo_readme.md'], 'utf8');
            // !tag new language
            fs.writeFileSync(getProjectUrl(...demoUrl, 'readme.zh-CN.md'), cptDir['demo_readme.zh-CN.md'], 'utf8');

            const testsUrl = [...nameUrl, '__tests__'];
            fs.mkdirSync(getProjectUrl(...testsUrl));
            fs.writeFileSync(getProjectUrl(...testsUrl, 'demo.test.tsx'), cptDir['tests_demo.text.tsx'], 'utf8');
            fs.writeFileSync(getProjectUrl(...testsUrl, 'index.test.tsx'), cptDir['tests_index.text.tsx'], 'utf8');

            res();
        } catch (err) {
            colorLog('FetTemplate Failed !', 'red');
            rej(err);
        }
    });
}

function addCptInSpecifiedFile() {
    return new Promise((res, rej) => {
        try {
            const { name, type } = cpt;

            const indexUrl = getProjectUrl('src', 'index.tsx');
            const components = fs.readFileSync(indexUrl, 'utf8');
            const newIndex = components + `export { default as ${name} } from './${name}';` + EOL;
            fs.writeFileSync(indexUrl, newIndex, 'utf8');

            const styleUrl = getProjectUrl('src', 'scss.tsx');
            const componentStyle = fs.readFileSync(styleUrl, 'utf8');
            const newStyle = componentStyle + `import './${name}/style';` + EOL;
            fs.writeFileSync(styleUrl, newStyle, 'utf8');

            const typeListUrl = getProjectUrl('site', '_util', 'componentIndex.tsx');
            // !tag new language
            componentIndex.push({ name, type, 'zh-CN': '待输入_中文名' });
            fs.writeFileSync(typeListUrl, `export default ${JSON.stringify(componentIndex)}`, 'utf8');
            res();
        } catch (err) {
            colorLog('AddCptInTemplate Failed !', 'red');
            rej(err);
        }
    });
}

/**
 * Main
 */
(async () => {
    try {
        await userInput();
        await readTemplate();
        await writeTemplate();
        await addCptInSpecifiedFile();
        colorLog('> Congratulations, create component success !!!', 'green');
    } catch (err) {
        console.log(err);
    }
})();
