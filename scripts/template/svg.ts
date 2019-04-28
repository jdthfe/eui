'use strict';
import fs from 'fs';
import SVGO from 'svgo';
import { getProjectUrl, EOL } from '../helpers';

const dirList = ['src', 'Icon', 'svgs'];
const dirPath = getProjectUrl(...dirList),
    // https://github.com/svg/svgo
    svgo = new SVGO({
        plugins: [
            {
                removeStyleElement: true,
            },
            {
                removeXMLNS: true,
            },
            {
                cleanupAttrs: true,
            },
            {
                removeDoctype: true,
            },
            {
                removeXMLProcInst: true,
            },
            {
                removeComments: true,
            },
            {
                removeMetadata: true,
            },
            {
                removeTitle: true,
            },
            {
                removeDesc: true,
            },
            {
                removeUselessDefs: true,
            },
            {
                removeEditorsNSData: true,
            },
            {
                removeEmptyAttrs: true,
            },
            {
                removeHiddenElems: true,
            },
            {
                removeEmptyText: true,
            },
            {
                removeEmptyContainers: true,
            },
            {
                removeViewBox: false,
            },
            {
                cleanupEnableBackground: true,
            },
            {
                convertStyleToAttrs: true,
            },
            {
                convertColors: true,
            },
            {
                convertPathData: true,
            },
            {
                convertTransform: true,
            },
            {
                removeUnknownsAndDefaults: true,
            },
            {
                removeNonInheritableGroupAttrs: true,
            },
            {
                removeUselessStrokeAndFill: true,
            },
            {
                removeUnusedNS: true,
            },
            {
                cleanupIDs: true,
            },
            {
                cleanupNumericValues: true,
            },
            {
                moveElemsAttrsToGroup: true,
            },
            {
                moveGroupAttrsToElems: true,
            },
            {
                collapseGroups: true,
            },
            {
                removeRasterImages: false,
            },
            {
                mergePaths: true,
            },
            {
                convertShapeToPath: true,
            },
            {
                sortAttrs: true,
            },
            {
                removeDimensions: true,
            },
            {
                removeAttrs: { attrs: '(stroke|fill)' },
            },
        ],
    });

let svgList: string[] = fs.readdirSync(dirPath);
const svgName: string[] = [];

let str = `const svgs = {`;

async function watiSvgo(key: string, data: string, filePath: string): Promise<void> {
    const result = await svgo.optimize(data, { path: filePath });
    if (key.split('.')[0]) {
        svgName.push(key.split('.')[0]);
        str += key.split('.')[0] + ":'" + result.data + "',";
    }
}

Promise.all(
    svgList.map(async key => {
        const filePath = getProjectUrl(...dirList, key);
        const data = fs.readFileSync(filePath, 'utf8');
        return await watiSvgo(key, data, filePath);
    }),
)
    .then(() => {
        str += '};export default svgs;';
        fs.writeFileSync(getProjectUrl(...dirList, '../', 'svgs.tsx'), str, 'utf8');
    })
    .then(() => {
        let propType = fs.readFileSync(getProjectUrl(...dirList, '../', 'PropsType.tsx'), 'utf8');
        // svgName.push('string');
        const str = propType
            .split(EOL)
            .map(item => {
                return item.replace(/value: .*;/, `value: '${svgName.join("' | '")}' | string;`);
            })
            .join(EOL);
        fs.writeFileSync(getProjectUrl(...dirList, '../', 'PropsType.tsx'), str, 'utf8');
        console.log('> Congratulations, generator svgs success !!!');
    });
