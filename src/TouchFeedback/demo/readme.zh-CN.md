> reference: [m-feedback](https://github.com/react-component/m-feedback)

用来模拟手机上的点击事件，解决 300ms 延迟问题

## Demo

## Tips

点击子组件时会给子组件增加 `_activeStyle` 和 `_activeClassName`。（demo 中的 class 变动请通过开发者工具查看效果）

`_disabled` 为 `true` 时拦截点击事件

只支持单个子元素

## API

| 属性            | 说明               | 类型                  | 默认值  | 必填    |
| --------------- | ------------------ | --------------------- | ------- | ------- |
| disabled        | 禁用               | `boolean`             | `false` | `false` |
| activeClassName | 点击时的属性名     | `string`              | `''`    | `false` |
| activeStyle     | 点击时的样式       | `React.CSSProperties` | `{}`    | `false` |
| children        | 被包裹的唯一子组件 | `React.ReactElement`  | -       | `true`  |
