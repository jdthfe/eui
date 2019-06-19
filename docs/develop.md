# Develop

开发文档，如何从头开始开发一个组件

## 1. Prepare

下载源代码 [`https://github.com/jdthfe/eui/tree/master`](https://github.com/jdthfe/eui/tree/master)

安装依赖

```bash
yarn install
```

切换一个新分支

## 2. Lint

为了规范开发，代码使用了严格的 `eslint` 、`prettier` 和 `stylelint`。推荐使用辅助插件，达到保存文件时自动格式化代码的效果。

以 vscode 为例

1.  安装并启用扩展 `Eslint` 、`Prettier - Code formatter` 、`stylelint`（选择工作区启用，防止影响其他项目）

2.  基于 vscode，增加如下配置

    ```json
    {
        // 增加测试快照可读性
        "files.associations": { "*.ts.snap": "html" },
        // 储存时自动格式化
        "editor.formatOnSave": true,
        // 允许在如下语言中提示错误和自动修复
        "eslint.validate": [
            "javascript",
            "javascriptreact",
            { "language": "typescript", "autoFix": true },
            { "language": "typescriptreact", "autoFix": true }
        ],
        // 关联 prettier & stylelint
        "prettier.stylelintIntegration": true
    }
    ```

3.  `ctrl` + `p` | `command` + `p` ，输入 `>reload window`，重载窗口

4.  完成！可以通过保存来自动格式化文件了

## 3. New

**辅助开发所使用的脚本，详细说明请查看 [scripts.md](./scripts.md)**

本地启动项目

```
yarn dev
```

新建一个组件

```
yarn new
```

假设新组建名字为 `Learn`，下面将会依次介绍生成的文件

---

`src/Learn/index.tsx` 

```tsx
import React from 'react';
// 辅助 className 拼接 https://github.com/JedWatson/classnames#readme
import classnames from 'classnames';
import { LearnProps } from './PropsType';
// 组件通用前缀
import prefix from '../_util/prefix';
const prefixCls = `${prefix}-learn`;

//  如果组件中包含其他组件，禁止从 src/index 中引入
//  应该直接从同级引入。eg:
//  import TouchFeedback from '../TouchFeedback';

//  引入通用变量
//  import variable from '../_util/variable';
//  const { transitionFade } = variable;

// Function Component
const Learn = (props: LearnProps) => {
    //  如果某属性为选填，请赋初始值。必填属性不赋值
    //  api 脚本会读取此处的初始值在 readme 中生成表格
    const { prop = 'default', className, children, ...restProps } = props;
    const cls = classnames(prefixCls, className);
    return (
        <div {...restProps} className={cls}>
            {prop} | {children}
        </div>
    );
};

export default Learn;
```

有关函数组件的格式和写法，请参考 `MessageBox`、`Toast` 组件

---

`src/Learn/PropsType.tsx` 

```tsx
//  组件需要继承 return 的最外层元素的属性
//  在 index.tsx 文件中，可以通过鼠标悬停在对应元素上，来查看属性全称
//  默认是 div 的属性
export interface LearnProps extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    // 属性的描述必须用 /** contentn */ 注释，并且使用英文
    /** description */
    prop?: string;
}
```

有关函数组件属性的格式和写法，请参考 `MessageBox`、`Toast` 组件

有关封装用组件属性的格式和写法，请参考 `TouchFeedback`、`Cover` 组件

---

`src/Learn/style/index.scss` 

```scss
//  组件样式，组件内禁止使用特定 px 值，必须引用变量。方便修改
@import '../../style/mixin';
$learn-prefix: $preifx + '-learn';

.#{$learn-prefix} {
    text-decoration: underline;
}
```

---

`src/Learn/demo/index.tsx` 

demo 文件用于展示、说明和测试组件效果，建议提供覆盖组件中所有 api 的样例

```tsx
import React from 'react';
//  如果组件中包含其他组件，请按如下方式引入
import { Learn } from '@src/index';
const Demo = () => {
    return (
        <div className="Learn">
            <Learn>children</Learn>
            <Learn prop={'Hello World'}>children</Learn>
        </div>
    );
};

export default Demo;
```

---

`src/Learn/demo/readme.md` 

`src/Learn/demo/readme.zh-CN.md`  请在对应语言的文档中使用对应语言

如果需要新增语言

1. 所有存在 `*.zh-CN.md` 的文档都需要新增对应语言文档。
2. 全局搜索 `!tag new language`，增加新语言代码。

```md
（标题会自动添加于此，请到 site/\_util/componentIndex.tsx 中完善组件的其他语言名称）

description

（demo 源码会自动添加在 ## Demo 之下，请勿删除 ## Demo）

## Demo

other description

## API

| Properties | Descrition  | Type     | Default     | Required |
| ---------- | ----------- | -------- | ----------- | -------- |
| prop       | description | `string` | `'default'` | `false`  |

（运行 yarn api 之后会生成新的 api table 在此，请复制并粘贴到其他语言中修改）
```

---

`src/Learn/__testS__/demo.test.tsx` 

通用测试，生成 demo 文件运行之后的快照。一般不需要修改

```tsx
import webDemoTest from '@tests/shared/demoTest';
webDemoTest('Learn');
```

---

`src/Learn/__testS__/index.test.tsx` 

对 demo 测试中未覆盖到处进行补充

```tsx
describe('Learn', () => {
    // Supplement uncovered test
    it('trigger event correctly', () => {
        expect(true).toBe(true);
    });
});
```

## 4. Test

运行 `yarn test Learn` 可以测试单组件，并且生成覆盖率报告在 `src/Learn/__testS__/coverage` 中 

请参照覆盖率报告，补充组件的测试直到覆盖率大于 90%

测试写法可以参照已有组件，在此不再赘述

提交之前务必运行 `yarn test` 测试全部组件，确保测试通过

页面 build 部署、npm 提交等均由 `Travis` 脚本自动完成，详细配置在 `.travis.yml` 中

## 5. Prod

```bash
yarn prod
```

将生成打包完成的组件，用以本地使用或者单独发布
