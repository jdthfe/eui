`EUI` ( Elephant UI) 是一套使用 Typescript 和最新 React Hooks 语法开发的移动端组件库。

### 特性和优势

-   UI 样式高度可配置，拓展性更强，轻松适应各类产品风格
-   提供 "组件按需加载" / "Web 页面高清显示" / "SVG Icon" 等优化方案，一体式开发
-   使用 TypeScript 开发，提供类型定义文件，支持类型及属性智能提示，方便业务开发
-   配合 TS 使用属性继承，方便对组件进行二次封装
-   使用 React Hooks 开发，性能优异
-   [测试覆盖率 80% 以上](https://codecov.io/gh/jdthfe/edm/)

### 快速上手

> 在开始之前，推荐先学习 React 和 ES2015。我们使用了 babel，试试用 ES2015 的写法来提升编码的愉悦感。确认 Node.js 已经升级到 v8.x 或以上。

#### 1. 创建一个项目

可以是已有项目，或者是使用 dva / create-react-app 新创建的空项目。**React 版本需要 v16.8 以上**

#### 2. 安装

```tsx
npm install e-ui --save
```

#### 3. 使用

组件使用实例：

```tsx
import { Button } from 'e-ui';
ReactDOM.render(<Button>Start</Button>, mountNode);
```

引入样式

```tsx
import 'e-ui/compiled/dist/index.css';
```

**按需加载**

**注意：强烈推荐使用。**

下面两种方式都可以只加载用到的组件，选择其中一种方式即可。

-   手动引入

```tsx
import Button from 'e-ui/compiled/lib/Button'; // 加载 JS
import 'e-ui/compiled/lib/Button/style/css'; // 加载 CSS
// import 'e-ui/compiled/lib/Button/style';         // 加载 LESS
```

如果项目中使用了 `webpack` 或者 `rollup`，支持如下写法（推荐）。

```tsx
import { Button } from 'e-ui';
import 'e-ui/compiled/lib/Button/style/css'; // 加载 CSS
// import 'e-ui/compiled/dist/index.css';   // 推荐在入口文件引入全部样式
```

-   使用 [babel-plugin-import](https://github.com/ant-design/babel-plugin-import)。

```tsx
// .babelrc or babel-loader option
{
        "plugins": [
      [
        "import",
        {
          "libraryName": "e-ui",
          "libraryDirectory": "compiled/lib", // or "compilesed/es"
          "camel2DashComponentName": false,
          "style": "css"// `style: true` 会加载 sass 文件
        }
      ]
    ]
}
```

然后只需从 antd-mobile 引入模块即可，无需单独引入样式。

```tsx
// babel-plugin-import 会帮助你加载 JS 和 CSS
import { Button } from 'e-ui';
```
