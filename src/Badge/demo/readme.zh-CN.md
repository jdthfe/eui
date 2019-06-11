图标右上角的红点、数字或者文字。用于告知用户，该区域的状态变化或者待处理任务的数量。

## Demo

other description

## API

| 属性 | 说明 | 类型 | 默认值 | 必填 |
| --- | --- | --- | --- | --- |
| size | 角标的大小 large 或者 small | `'large' | 'small'` | - | `false` |
| max | 数字的最大值 | `number` | - | `false` |
| corner | 是否置于角落 | `boolean` | - | `false` |
| dot | 是否只展示一个点 | `boolean` | - | `false` |
| text | 展示的数字或文案，当为数字的时候，大于 max 展示 \${max}+， 为 0 时隐藏 | `any` | - | `false` |
