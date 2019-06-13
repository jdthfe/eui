`EUI` ( Elephant UI) is a set of mobile component libraries developed using Typescript and the latest React Hooks syntax.

### Features and Advantages

-   The UI is fully Configurable and Scalable, easily adapt to all kinds of product style.
-   Provide "Components are loaded on demand" / "Web page HD display" / "SVG Icon" optimization features, integrated development.
-   Use TypeScript to develop, provide type definition files, support type and attribute smart tips for easy business development.
-   Use attribute inheritance with TS to facilitate secondary encapsulation of components
-   Developed with React Hooks for superior performance
-   [Test coverage is over 80%](https://codecov.io/gh/jdthfe/edm/)

### Getting Started

> Before delving into Ant Design React, a good knowledge of React and ES2015 is needed. Make sure that you had installed Node.js(> v8.x) correctly.

#### 1. Create a New Project

Can be an existing project, or a newly created empty project with dva / create-react-app. **React version requires higher than v16.8**

#### 2. Installation

```tsx
npm install e-ui --save
```

#### 3. Usage

Example of usage:

```tsx
import { Button } from 'e-ui';
ReactDOM.render(<Button>Start</Button>, mountNode);
```

And import stylesheets manually:

```tsx
import 'e-ui/compiled/dist/index.css';
```

**Use modularized e-ui**

**Note: Strongly recommended.**

The following two ways used to load the only components you used, select one of the ways you like.

-   Manually import

```tsx
import Button from 'e-ui/compiled/lib/Button'; // for JS
import 'e-ui/compiled/lib/Button/style/css'; // for CSS
// import 'e-ui/compiled/lib/Button/style'; // that will import sass
```

If `webpack` or `rollup` is used in the project, the following is supported（Recommended）.

```tsx
import { Button } from 'e-ui';
import 'e-ui/compiled/lib/Button/style/css'; // for CSS
// import 'e-ui/compiled/dist/index.css'; // Recommend to import all styles in the entry file
```

-   Use [babel-plugin-import](https://github.com/ant-design/babel-plugin-import)。

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
          "style": "css"// `style: true` for sass
        }
      ]
    ]
}
```

This allows you to import components from antd-mobile without having to manually import the corresponding stylesheet. The babel plugin will automatically import stylesheets.

```tsx
// import js and css modularly, parsed by babel-plugin-import
import { Button } from 'e-ui';
```

#### 4. API

When the component is defined, the attribute of the element itself is strictly inherited, so when using it, it is convenient to use all the attributes of the corresponding tag. Eg:

```tsx
// The Button component is a wrapper around the <button /> element and the TouchFeedback component
// extends React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>
// and TouchFeedbackProps
import { Button } from 'e-ui';
function buttonClick() {
    console.log('buttonClick!');
}
ReactDOM.render(
    <Button
        // button Element attribute
        onClick={buttonClick}
        // button Element attribute
        className="my-button"
        // TouchFeedbackProps's props
        activeClassName="my-active"
        // Button‘s props
        theme="praimary"
    >
        button
    </Button>,
    mountNode,
);
```

The corresponding property descriptions for inheritance can be viewed in the component API introduction. Attached with a link
