import { SFC } from 'react';
import componentIndexNoType from './componentIndex';
import { languages } from './language';
import Loadable from 'react-loadable';
import LoadingComponent from '../_util/LoadingComponent';

export interface Docs {
    readme: string;
    'readme.zh-CN'?: string;
    demoSource?: string;
    [key: string]: string | undefined;
}

export const componentIndex: ComponentIndex[] = componentIndexNoType;

export const sortComponentIndex = (componentIndex: ComponentIndex[]) => {
    const newStructure: { [propName: string]: ComponentIndex[] } = {};
    componentIndex.map(item => {
        if (newStructure[item.type]) {
            newStructure[item.type].push(item);
        } else {
            newStructure[item.type] = [item];
        }
    });
    return newStructure;
};
function loadInstance(name: string) {
    return Loadable({
        loader: () => import(/* webpackChunkName: "[request]" */ `../../src/${name}/demo`),
        loading: LoadingComponent,
    });
}
export const getInstance = (item: ComponentIndex) => {
    let instance: SFC;
    try {
        if (item.type === 'markdownOnly') {
            throw 'markdownOnly have not Instance';
        } else {
            instance = loadInstance(item.name) as SFC;
            // instance = require(`../../src/${item.name}/demo`).default;
        }
    } catch (e) {
        throw e;
    }
    return instance;
};

// function loadReadme(name: string, readmeLang: string) {
//     return Loadable({
//         loader: () => import(`!!raw-loader!../../src/${name}/demo/${readmeLang}.md`),
//         loading: LoadingComponent,
//     });
// }
export const getDocs = (item: ComponentIndex) => {
    const docs: Docs = { readme: '' };
    try {
        if (item.type === 'markdownOnly') {
            languages.map(lang => {
                const readmeLang = `readme${lang.code === 'en-US' ? '' : '.' + lang.code}`,
                    mdLang = `${item.name}${lang.code === 'en-US' ? '' : '.' + lang.code}`;
                docs[readmeLang] = require(`!!raw-loader!../document/markdown/${mdLang}.md`).default;
            });
        } else {
            docs.demoSource = require(`!!raw-loader!../../src/${item.name}/demo`).default;
            languages.map(lang => {
                const readmeLang = `readme${lang.code === 'en-US' ? '' : '.' + lang.code}`;
                // console.log(loadReadme(item.name, readmeLang));
                // docs[readmeLang] = loadReadme(item.name, readmeLang) as SFC;
                docs[readmeLang] = require(`!!raw-loader!../../src/${item.name}/demo/${readmeLang}.md`).default;
            });
        }
    } catch (e) {
        throw e;
    }
    return docs;
};
