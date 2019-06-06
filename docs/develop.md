# Develop

开发文档，如何从头开始开发一个组件

## Lint

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

3.  `ctrl`+`p`，输入 `>reload window`，重载窗口

4.  完成！可以通过保存来自动格式化文件了

## Dev

直接进入开发模式，运行 dev 命令后。进入控制台中展示的 `localhost` 页面即可

```
yarn dev
```

## New

创建新组件

```
yarn new
```

```
? Please input Component's name:
> 输入组件名，建议大小开头，例：Button

? Please choic Component's type: (Use arrow keys)
> Data Display
  Data Entry
  Feedback
  Depth
  Create a new type
> 选择类型，选择最后一项可以创建新的类型，例：MyType
```

脚本会自动添加文件和代码在项目中，开发者只需要关注 `[component]` 目录中的相关代码即可

```
Project
│
│   //  组件源码
└── component
    │   //  单个组件
    └── [component]
        |   //  测试代码
        ├── __test__
        |       demo.test.ts    //  demo 测试
        |       index.test.tsx  //  单元测试，用以补充 demo 测试中未覆盖到的部分
        |
        |   //  用以展示的 demo
        └── demo
            ·   demo.tsx   //  demo 源码
            ·   index.ts   //  通过 raw-loader 引入 demo 实例、源码和 webpack
            ·   readme.md  //  组件使用说明
            ·
            index.tsx     //  组件源码
            PropsType.ts  //  组件属性
            style.scss    //  样式
```

## API

自动生成组件 API 说明

```
yarn api
```

```
? Please selecte Component's name:
> Icon
  Button
  MessageBox
  TouchFeedback
  Portal
  TransitionWrap
> 选择需要生成 api 说明的组件

? Are you sure you want to generator it?
> 输入 y 确认生成
```

此命令执行后会自动生成对应组件的 api 说明在 `[component]/demo/readme.md` 文档尾部。

## Remove

删除组件

```
yarn rm
```

```
? Please selecte Component's name:
> Icon
  Button
  MessageBox
  TouchFeedback
  Portal
  TransitionWrap
> 选择需要删除的组件

? Are you sure you want to delete it?
> 输入 y 确认删除
```

请在未启动项目过程中试用此命令，否则可能导致 `[component]` 文件夹删除失败。

## Test

执行测试

```
yarn test
```

生成的测试报可以通过 `coverage/lcov-report/index.html` 访问，未覆盖到的代码请通过对应组件目录下的 `index.test.tsx` 补充

如果有新的，确认无误的改动，运行 `yarn test -u` 覆盖之前测试快照

## Prod

组件打包

```
yarn prod
```

执行成功后，将生成最终代码到 `lib` 文件夹中。

## Build

展示页打包

```
yarn build
```

执行成功后，将生成最终代码到 `build` 文件夹中。
