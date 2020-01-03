const path = require('path');
const fs = require('fs-extra');

// 打包完拷贝文件到 后端的static
fs.copySync(
    '/Users/likeke3/Desktop/jd-component/edm/compiled',
    '/Users/likeke3/Desktop/jd-global/blueprint-common/common_modules',
);
