# DocsMap

文件结构地图

```js
Project
│
├── src                      //  组件源码
│   │   index.tsx                //  组件统一入口
│   │   scss.tsx                 //  组件样式统一入口
│   │                            //  组件源码
│   ├── _util                    //  工具集
│   │       prefix.tsx           //  组件前缀
│   │       variable.tsx         //  通用变量
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
│   │
│   │
│   └── style                    //  组件通用样式
│           animate.scss         //  预制动画效果
│           index.scss           //  组件通用预制
│           index.tsx            //  组件样式（用以满足按需加载的打包）
│           mixin.scss           //  mixin
│           variables.scss       //  样式主题变量
│
├── site                     //  展示页源码
│   │   App.tsx                  //  路由入口
│   │   index.html               //  html 模板
│   │   index.tsx                //  展示页入口
│   │   supplement.d.ts          //  类型声明补充
│   │
│   ├── _util                    //  通用方法
│   │       componentIndex.tsx   //  组件目录
│   │       index.tsx            //  通用方法，获取目录、组件或者源码
│   │       language.tsx         //  判断语言
│   │       markdownOnly.tsx     //  纯文档组件目录
│   │       rem.tsx              //  自动设置页面 rem
│   │
│   ├── assets                   //  静态资源
│   │       instanceBar.png      //  模拟手机状态栏
│   │       logo.png             //  完整 logo
│   │       logo1.png            //  透明 logo
│   │       logo2.png            //  灰度 logo
│   │       logo2.png            //  灰度 logo
│   │
│   ├── document                 //  文档页（用以电脑访问）
│   │   │   Article.tsx          //  组件说明页
│   │   │   index.tsx            //  说明页路由
│   │   │   Preface.tsx          //  首页
│   │   │
│   │   ├── component            //  文档页组件
│   │   └── markdown             //  说明文档
│   │
│   ├── instance                 //  实例（用以手机访问）
│   │       Demo.tsx             //  组件展示页
│   │       Home.tsx             //  首页
│   │       index.tsx            //  实例路由
│   │
│   └── style                    //  样式
│       ├── common               //  公共样式
│       ├── document             //  文档页样式
│       └── instance             //  实例样式
│
├── script                   //  脚本
│   │   babelrc.ts               //  babelrc config
│   │   helper.ts                //  帮助文件
│   │   postcss-pxtorem.d.ts     //  类型声明补充
│   │
│   ├── config                   //  webpack config
│   │       getStyleLoader.ts    //  style loader 整合
│   │       webpack.config.build.ts  //  build config
│   │       webpack.config.dev.ts//  dev config
│   │       webpack.config.ts    //  base config
│   │
│   ├── gulp                     //  gulp script
│   │       gulpfile.ts          //  gulp config
│   │       tsconfig.ts          //  tsconfig for gulp
│   │
│   ├── template                 //  开发脚本
│   │   │   api.ts               //  根据组件 props 生成 table
│   │   │   new.ts               //  生成新组件
│   │   │   remove.ts            //  移除组件
│   │   │   svg.ts               //  生成 icon
│   │   └── NAME                 //  组件模板
│   │
│   └── tests                    //  测试相关
│
├── docs                     //  项目文档
├── typings                  //  类型文件
│                            //  下列文件夹需要运行对应脚本生成
├── build                    //  yarn build，展示页打包代码
├── compiled                 //  yarn prod，组件库打包代码
│   ├── dist                     //  符合 umd 的代码
│   ├── es                       //  符合 es6 模块化的代码
│   └── lib                      //  符合 CommonJS 规范的模块化的代码
└── coverage                 //  测试覆盖率
```
