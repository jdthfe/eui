`EDM` ( elephant desgin mobile) 是 xx 集团-xx 合资公司-前端研发部 M 端 UI 规范的 React 实现，提供了一整套基础的 UI 组件以及一些常用的业务组件。

目前我们有 num + 组件，这些组件都已经在 xx 的各类 M 业务中使用，我们会在此基础上，持续开发一些新组件。

我们的目标是让 React 项目开发更快、更简单。

## 特性

-   高质量的 React 基础组件以及丰富的业务组件
-   内置 TypeScript 类型定义文件
-   支持定制主题
-   代码/样式按需加载
-   yarn + webpack + babel + postcss + prettier + stylelint
-   一套 xx 设计师绘制的图标库
-   单测覆盖率在 90% 以上

## 支持环境

-   React >= 16.8
-   现代浏览器以及 IE 11 及以上

## 安装

```bash
yarn add edm
```

## 使用组件

```tsx
import { Button } from 'edm';

// 引入样式
import 'edm/css/index.css';

ReactDOM.render(<Button />, mountNode);
```

## 测试

[测试报告](https://codecov.io/gh/jdthfe/edm/)
