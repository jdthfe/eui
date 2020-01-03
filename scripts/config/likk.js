const path = require('path');
const fs = require('fs-extra');
import { getProjectUrl } from '../helpers';
const _path = getProjectUrl('compiled');
// 打包完拷贝文件到 后端的static
fs.copySync(
    _path,
    '/Users/likeke3/Desktop/jd-global/blueprint-common/common_modules',
);
