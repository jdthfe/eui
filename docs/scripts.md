# Scripts

辅助开发所使用的脚本

全部命令可在 [`package.json` 中的 scripts 字段](../package.json) 中查看

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
│   ...
├── src
│   │
│   ├── [component]              //  单个组件
│   │   │   index.tsx            //  组件源码
│   │   │   PropsType.tsx        //  组件属性
│   │   │
│   │   ├── __tests__            //  测试文件
│   │   │   │    demo.test.tsx   //  结合 demo 的组件测试
│   │   │   │    index.test.tsx  //  组件测试
│   │   │   │
│   │   │   └── __snapshots__    //  测试快照
│   │   │
│   │   ├── demo                 //  用以展示的 demo
│   │   │       index.tsx        //  demo 源码
│   │   │       readme.md        //  组件文档（英文）
│   │   │       readme.zh-CN.md  //  组件文档（中文）
│   │   │
│   │   └── style                //  组件样式
│   │           index.scss       //  组件样式 scss
│   │           index.tsx        //  组件样式（用以满足按需加载的打包）
│   ...
│
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

请在项目未启动时运行此命令，否则可能导致 `[component]` 文件夹删除失败。

## Svg

icon 处理

```
yarn svg
```

运行此命令，将会打包所有 `src/Icon/svgs` 文件夹下的 svg 文件，到图标组件和 demo 页中

## Test

执行测试

```
yarn test
```

生成的测试报可以通过 `/coverage/lcov-report/index.html` 访问，未覆盖到的代码请通过对应组件目录下的 `index.test.tsx` 补充

如果有新的，确认无误的改动，运行 `yarn test -u` 覆盖之前的测试快照

支持测试单一组件

```bash
yarn test [CptName]
```

运行 `yarn test [CptName] -u` 覆盖单一组件的测试快照

## Prod

组件打包

```
yarn prod
```

执行成功后，将生成最终代码到 `compiled` 文件夹中。

## Build

展示页打包

```
yarn build
```

执行成功后，将生成最终代码到 `build` 文件夹中。
