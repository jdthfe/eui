'use strict';
import fs from 'fs';
import SVGO from 'svgo';
import { getProjectUrl } from '../helpers';

const dirList = ['src', 'Icon'];
const dirPath = getProjectUrl(...dirList, 'svgs'),
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

// let kk = 0;
async function watiSvgo(key: string, data: string, filePath: string): Promise<void> {
    const result = await svgo.optimize(data, { path: filePath });
    svgName.push(key.split('.')[0]);
    str += key.split('.')[0] + ":'" + result.data + "',";
}
Promise.all(
    svgList.map(async key => {
        if (key.split('.')[1] !== 'svg') {
            return Promise.resolve();
        }
        try {
            const filePath = getProjectUrl(...dirList, 'svgs', key);

            let data = fs.readFileSync(filePath); //通过node 中fs模块同步读文件内容
            //判断文件头的字节
            if (data[0] === 0xef && data[1] === 0xbb && data[2] === 0xbf) {
                data = data.slice(3);
            }
            return await watiSvgo(key, data.toString('utf8'), filePath);
        } catch (err) {
            console.log('--err--', err);
        }
    }),
)
    .then(() => {
        str += '};export default svgs;';
        fs.writeFileSync(getProjectUrl(...dirList, 'svgs.tsx'), str, 'utf8');
    })
    .then(() => {
        let str = fs.readFileSync(getProjectUrl(...dirList, 'PropsType.tsx'), 'utf8');
        const propsStr = str.replace(/value:(.|\n)*?;/, `value: '${svgName.join("' | '")}';`);
        fs.writeFileSync(getProjectUrl(...dirList, 'PropsType.tsx'), propsStr, 'utf8');
    })
    .then(() => {
        let str = fs.readFileSync(getProjectUrl(...dirList, 'demo', 'index.tsx'), 'utf8');
        const propsStr = str.replace(
            /(?<=IconProps\['value'\]\[\] = \[)(.|\n)*?(?=\];)/,
            svgName.map(item => `'${item}'`).join(','),
        );
        fs.writeFileSync(getProjectUrl(...dirList, 'demo', 'index.tsx'), propsStr, 'utf8');
        console.log('> Congratulations, generator svgs success !!!');
    })
    .catch(err => console.log(err));
