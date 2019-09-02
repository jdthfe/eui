列表组建

## Demo

其他描述

## API

#### List

| 属性         | 说明        | 类型     | 默认值 | 必填    |
| ------------ | ----------- | -------- | ------ | ------- |
| renderHeader | list header | `string` | `null` | `false` |
| renderFooter | list footer | `string` | `null` | `false` |

#### List.Item

| Properties  | Descrition         | Type                                                   | Default      | Required |
| ----------- | ------------------ | ------------------------------------------------------ | ------------ | -------- |
| index       | 列表序列号         | `number | undefined`                                   | `undefined`  | `false`  |
| thumb       | 缩略图             | `React.ReactNode`                                      | `null`       | `false`  |
| extra       | 子元素右侧内容     | `React.ReactNode`                                      | `null`       | `false`  |
| wrap        | 子元素左侧是否换行 | `boolean`                                              | `false`      | `false`  |
| disabled    | 静止点击           | `boolean`                                              | `false`      | `false`  |
| activeStyle | 点击时样式         | `React.CSSProperties`                                  | `null`       | `false`  |
| onClick     | 点击事件           | `(e: React.MouseEvent, i: number | undefined) => void` | `()=>void`   | `false`  |
| className   | 组件样式           | `string`                                               | `null`       | `false`  |
| arrow       | 箭头方向           | `'horizontal' | 'up' | 'down' | 'empty'`               | `horizontal` | `false`  |
| align       | 子元素对齐         | `'top' | 'middle' | 'bottom'`                          | `middle`     | `false`  |

#### Item.Brief

| Properties | Descrition | Type                  | Default | Required |
| ---------- | ---------- | --------------------- | ------- | -------- |
| style      | Brief 样式 | `React.CSSProperties` | -       | `false`  |
