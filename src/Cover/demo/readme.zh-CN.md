遮罩组件，包含一个最简单的 Cover 和封装好 TransitionWrap 的 Cover。

如果需要遮罩渲染在根节点，请自行包裹 Portal。

## Demo

## API

### Extends `div`

### Cover

| 属性        | 说明 | 类型      | 默认值  | 必填    |
| ----------- | ---- | --------- | ------- | ------- |
| transparent | 透明 | `boolean` | `false` | `false` |

### Cover.Transition

附带动画效果的 `Cover` ，继承自 [`TransitionWrap`](#/document/TransitionWrap)

| 属性                                             | 说明     | 类型     | 默认值                                | 必填    |
| ------------------------------------------------ | -------- | -------- | ------------------------------------- | ------- |
| transitionClassName                              | 动画属性 | `string` | [transitionFade](#/document/variable) | `false` |
| [`...TransitionWrap`](#/document/TransitionWrap) |          |          |                                       |         |
