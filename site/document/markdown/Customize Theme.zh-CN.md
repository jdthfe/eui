e-ui 设计规范上支持一定程度的样式定制，以满足业务和品牌上多样化的视觉需求，包括但不限于主色、圆角、边框和部分组件的视觉定制。

### 样式变量

e-ui 的样式使用了 [Sass](https://sass-lang.com/) 作为开发语言，并定义了一系列全局/组件的样式变量，你可以根据需求进行相应调整。

-   [默认样式变量](https://github.com/jdthfe/edm/blob/master/src/style/variables.scss)

### 定制方式

我们使用 [options data](https://sass-lang.com/documentation/variables#default-values) 的方式来覆盖变量。

#### 1) theme 属性

-   首先，你的项目里需要包含如下依赖 `babel-plugin-import node-sass sass-loader style-loader css-loader`。

```
  npm install --save-dev babel-plugin-import sass sass-loader style-loader css-loader
```

配置 `babel-plugin-import` 确保加载 e-ui scss 文件

```tsx
{
    ...
     "plugins": [
      [
        "import",
        {
          "libraryName": "e-ui",
          "libraryDirectory": "compiled/lib", // or "compilesed/es"
          "camel2DashComponentName": false,
          "style": true// `style: true` for sass
        }
      ]
    ]
}
```

-   在 `webpack` 配置文件中添加 scss 文件的 sass-loader 处理，在 options 选项里面将包含所有我们想要修改的主题样式。[全部主题样式参考这里](https://github.com/jdthfe/edm/blob/master/src/style/variables.scss)

```tsx
 {
    test: /\.scss$/,
    use: [
        ...,
        {
            loader: require.resolve('sass-loader'),
            options: {
                data: '$primary: #c23e25;',// 定制修改品牌首选色

            }
        }
    ],
},
```

#### 2) theme.json

用 json 文件进行变量覆盖。

创建一个单独的 `theme.json` 文件如下，再引入这个文件。

`["$primary:#2A83E1;", "$button-l:100px;"]`

```tsx
const theme = require('theme.json')

{
    test: /\.scss$/,
    use: [
        ...,
        {
            loader: require.resolve('sass-loader'),
            options: {
                data: theme.join(' '),
            }
        }
    ],
},
```
