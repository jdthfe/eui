# EDM（Elephant Design Mobile）

A configurable Mobile UI

## 效果预览

-   [电脑访问](https://jdthfe.github.io/edm/build/)

-   [手机访问](https://jdthfe.github.io/edm/build/#/instance)

## 快速开发

安装依赖

NPM

```bash
npm install
```

YARN（推荐）

```bash
yarn install
```

## 使用

-   [我是开发者](./docs/develop.md)
-   [我是使用者](./docs/client.md)

## 目录结构

[查看完整文件结构](./docs/docsMap.md)

```js
Project
│
├── src            //  组件源码
│   ├── [component]      //  单个组件
│   │   ├── __tests__    //  测试文件
│   │   └── demo         //  用以展示的 demo
│   ├── common           //  底层公共组件和方法
│   │   └── [component]  //  底层组件，结构同上
│   └── style            //  样式
│
├── example              //  展示页源码
│   ├── document         //  文档页（用以电脑访问）
│   ├── instance         //  实例（用以手机访问）
│   ├── style            //  样式
│   └── until            //  通用方法
│
├── script               //  脚本
│   └── template         //  组件模板
├── config               //  配置文件
├── tests                //  通用测试配置
├── lib                  //  组件打包目录
├── docs                 //  项目文档
├── typings              //  类型文件
└── bak                  //  无用。请忽略
    ...
```

## 项目特性

-   基于 ts-node 全程使用 Typescript（包括 webpack 配置）
-   开发模式基于 SFC + React Hooks

## 组件开发规范

开发组件过程中所需注意的规范和提示

### Typescript 相关

组件需要继承本身标签的所有属性
