`EUI` ( Elephant UI) 是一套使用 Typescript 和最新 React Hooks 语法开发的移动端组件库。

### 特性和优势

-   UI 样式高度可配置，拓展性更强，轻松适应各类产品风格
-   提供 "组件按需加载" / "Web 页面高清显示" / "SVG Icon" 等优化方案，一体式开发
-   使用 TypeScript 开发，提供类型定义文件，支持类型及属性智能提示，方便业务开发
-   配合 TS 使用属性继承，方便对组件进行二次封装
-   使用 React Hooks 开发，性能优异
-   [测试覆盖率 80% 以上](https://codecov.io/gh/jdthfe/eui/)

### 快速上手

> 在开始之前，推荐先学习 React 和 ES2015。我们使用了 babel，试试用 ES2015 的写法来提升编码的愉悦感。确认 Node.js 已经升级到 v8.x 或以上。

#### 1. 创建一个项目

可以是已有项目，或者是使用 dva / create-react-app 新创建的空项目。**React 版本需要 v16.8 以上**

#### 2. 安装

```tsx
npm install @jdthfe/eui --save
```

#### 3. 使用

组件使用实例：

```tsx
import { Button } from '@jdthfe/eui';
ReactDOM.render(<Button>Start</Button>, mountNode);
```

引入样式

```tsx
import 'eui/compiled/dist/index.css';
```

**按需加载**

**注意：强烈推荐使用。**

下面两种方式都可以只加载用到的组件，选择其中一种方式即可。

-   手动引入

```tsx
import Button from 'eui/compiled/lib/Button'; // 加载 JS
import 'eui/compiled/lib/Button/style/css'; // 加载 CSS
// import 'eui/compiled/lib/Button/style';         // 加载 LESS
```

如果项目中使用了 `webpack` 或者 `rollup`，支持如下写法（推荐）。

```tsx
import { Button } from '@jdthfe/eui';
import 'eui/compiled/lib/Button/style/css'; // 加载 CSS
// import 'eui/compiled/dist/index.css';   // 推荐在入口文件引入全部样式
```

-   使用 [babel-plugin-import](https://github.com/ant-design/babel-plugin-import)。

```tsx
// .babelrc or babel-loader option
{
        "plugins": [
      [
        "import",
        {
          "libraryName": "eui",
          "libraryDirectory": "compiled/lib", // or "compilesed/es"
          "camel2DashComponentName": false,
          "style": "css"// `style: true` 会加载 sass 文件
        }
      ]
    ]
}
```

然后只需从 eui 引入模块即可，无需单独引入样式。

```tsx
// babel-plugin-import 会帮助你加载 JS 和 CSS
import { Button } from '@jdthfe/eui';
```

#### 4. API

组件定义时严格的继承了元素本身属性，因此在使用时，可以方便的使用对应标签的所有属性。eg:

```tsx
// Button 组件是对 <button /> 元素和 TouchFeedback 组件的封装
// 继承 React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>
// 和 TouchFeedbackProps
import { Button } from '@jdthfe/eui';
function buttonClick() {
    console.log('buttonClick!');
}
ReactDOM.render(
    <Button
        // button 元素自身属性
        onClick={buttonClick}
        // button 元素自身属性
        className="my-button"
        // TouchFeedbackProps 组件属性
        activeClassName="my-active"
        // Button 组件新增属性
        theme="praimary"
    >
        button
    </Button>,
    mountNode,
);
```

对应继承的属性说明，都能在组件 API 介绍中查看。附带有链接
