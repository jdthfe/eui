> reference: [m-feedback](https://github.com/react-component/m-feedback)

Used to simulate click events on mobile phones to resolve 300ms latency issues

## Demo

## Tips

点击子组件时会给子组件增加 `_activeStyle` 和 `_activeClassName`。（demo 中的 class 变动请通过开发者工具查看效果）

`_disabled` 为 `true` 时拦截点击事件

Only support single child elements

## API

| 属性            | 说明               | 类型                  | 默认值  | 必填    |
| --------------- | ------------------ | --------------------- | ------- | ------- |
| disabled        | 禁用               | `boolean`             | `false` | `false` |
| activeClassName | 点击时的属性名     | `string`              | `''`    | `false` |
| activeStyle     | 点击时的样式       | `React.CSSProperties` | `{}`    | `false` |
| children        | 被包裹的唯一子组件 | `React.ReactElement`  | -       | `true`  |
