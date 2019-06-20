Ant Design Mobile allows to customize some basic design aspects in order to meet the needs of UI diversity from business and brand, including primary color, border radius, border color, etc.

### Sass variables

We are using [Sass](https://sass-lang.com/) as the development language of style. A set of sass variables are defined for each design aspect that can be customized to your needs.

-   [the default style variable](https://github.com/jdthfe/eui/blob/master/src/style/variables.scss)

Please report an issue if the existing list of variables is not enough for you.

### How to do it

we can use the way of [options data](https://sass-lang.com/documentation/variables#default-values) to override variables.

#### 1) theme

-   Firstly，you should install these devDependencies in your project: `babel-plugin-import node-sass sass-loader style-loader css-loader`。

```
  npm install --save-dev babel-plugin-import babel-plugin-import node-sass sass-loader style-loader css-loader
```

Secondly, configuration `babel-plugin-import` to load eui sass

```tsx
{
    ...
     "plugins": [
      [
        "import",
        {
          "libraryName": "@jdthfe/eui",
          "libraryDirectory": "compiled/ed", // or "compilesed/lib"
          "camel2DashComponentName": false,
          "style": true// `style: true` for sass
        }
      ]
    ]
}
```

-   in your `webpack` config file,add scss about config，Set all the theme styles we want to modify in the options.[default theme styles](https://github.com/jdthfe/eui/blob/master/src/style/variables.scss)

```tsx
 {
    test: /\.scss$/,
    use: [
        ...,
        {
            loader: require.resolve('sass-loader'),
            options: {
                data: '$primary: #c23e25;',

            }
        }
    ],
},
```

#### 2) theme.json

Variable coverage with json files.

Create a separate `theme.json` file as follows, and then import this file.

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
