# DocsMap

文件结构地图

```js
Project
│
│   //  此目录与开发无任何关联，可以完全忽略。仅仅用来备份一些开发过程中的配置。
├── bak
│
│   //  webpack 相关配置文件
├── config
│       webpack.config.ts       //  公共配置文件
│       webpack.config.prod.ts  //  组件 build 配置文件
│       webpack.config.dev.ts   //  开发模式配置文件
│       getStyleLoader.ts       //  样式 loader 的封装
│       until.ts                //  打包过程中用到的公共方法
│
│   //  组件源码
├── component
│   │   //  单个组件
│   ├── [component]
│   │   |   //  用以展示的 demo
│   │   └── demo
│   │       ·   demo.tsx   //  demo 源码
│   │       ·   index.ts   //  通过 raw-loader 引入 demo 实例、源码和 webpack
│   │       ·   readme.md  //  组件使用说明
│   │       ·
│   │       index.tsx     //  组件源码
│   │       PropsType.ts  //  组件属性
│   │       style.scss    //  样式
│   │
│   │   //  底层公共组件和方法
│   ├── common
│   │   │   //  底层组件，结构同上
│   │   └── [component]
│   │
│   │   //  样式
│   └── style
│       |   //  主题样式
│       └── themes
│       ·   ·   index.scss  //  主题色，公共属性
│       ·   ·
│       ·    index.scss  //  组件库样式入口
│       ·
│       index.d.ts  //  类型声明
│       index.ts    //  组件入口
│
│   //  展示页源码
├── example
│   │   //  文档页（用以电脑访问）
│   ├── document
│   │   |   //  文档页组件
│   │   ├── component
│   │   │       Iframe.tsx  //  页面相关组件
│   │   │       ...
│   │   │
│   │   └── markdown
│   │       ·   index.tsx     //  导入 md
│   │       ·   ...           //  不包含组件的纯文档页
│   │       ·
│   │       index.tsx     //  入口
│   │       Preface.tsx   //  首页
│   │       Article.tsx   //  文档页
│   │
│   │   //  实例（用以手机访问）
│   ├── instance
│   │       index.tsx  //  入口
│   │       Home.tsx   //  首页
│   │       Demo.tsx   //  实例页
│   │
│   │   //  样式
│   ├── style
│   │   |   //  公共样式
│   │   ├── common
│   │   │      ...
│   │   │
│   │   |   //  文档页样式
│   │   ├── document
│   │   │      ...
│   │   │
│   │   |   //  实例页样式
│   │   └── instance
│   │   ·      ...
│   │   ·
│   │   index.scss  //  样式入口
│   │
│   │   //  通用方法
│   └── until
│   ·   structure.ts  //  组件目录结构
│   ·
│   index.d.ts  //  类型声明
│   index.ts    //  展示页入口
│   App.ts
│
│   //  脚本文档
├── script
│   │   //  组件模板
│   └── template
│   ·       ...
│   ·
│   new.ts  //  生成组件的脚本
│   typeList.json  //  组件分类
│
│   //  类型文件
└── typings
·       ...
·
·   tsconfig.json  //  ts 配置文件
```
