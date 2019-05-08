Portal 提供了一种很好的将子节点渲染到父组件以外的 DOM 节点的方式。

## Demo

## API

| 属性      | 说明               | 类型              | 默认值          | 必填    |
| --------- | ------------------ | ----------------- | --------------- | ------- |
| mountNode | 被挂载的父元素     | `Element`         | `document.body` | `false` |
| children  | 被包裹的唯一子节点 | `React.ReactNode` | -               | `true`  |
