在点击控件或者某个区域后，浮出一个气泡菜单来做更多的操作。 如果设置了遮罩层，建议通过点击遮罩层的任一位置，进行退出。

## Demo

## API

继承 `div`

| 属性 | 说明 | 类型 | 默认值 | 必填 |
| --- | --- | --- | --- | --- |
| anchorEl | Popover 定位的锚元素 | `HTMLElement | null` | - | `true` |
| dir | Popover 相对锚元素的方向 | `'top-left' | 'top-center' | 'top-right' | 'bottom-left' | 'bottom-center' | 'bottom-right'` | - | `true` |
| onClickCover | 值为 false 或者 undefined 时，隐藏遮罩。点击遮罩时触发的函数。**返回 `false` 时阻止 Popover 关闭** | `(() => void | boolean) | boolean` | `false` | `false` |
| hasArrow | 是否存在箭头指向锚元素 | `boolean` | `false` | `false` |
| coverProps | Popover 中，Cover 的 props | [`CoverWithTransitionWrap`](#/document/Cover) | - | `false` |
| [`...TransitionWrap`](#/document/TransitionWrap) |  |  |  |  |
