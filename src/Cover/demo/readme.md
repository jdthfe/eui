The Cover component contains one of the simplest FC and a FC with TransitionWrap.

If you need a Cover to render at the root node, wrap the Portal yourself.

## Demo

other description

## API

Extends `div`

### Cover

| Properties  | Descrition  | Type      | Default | Required |
| ----------- | ----------- | --------- | ------- | -------- |
| transparent | transparent | `boolean` | `false` | `false`  |

### Cover.Transition

Cover with TransitionWrap

| 属性 | 说明 | 类型 | 默认值 | 必填 |
| --- | --- | --- | --- | --- |
| [`...Cover`](#/document/Cover) |  |  |  |  |
| [`...TransitionWrap`](#/document/TransitionWrap) |  |  |  |  |
| [transitionClassName](#/document/TransitionWrap) | The animation classNames applied to the component as it enters, exits or has finished the transition. | `string` | [`transitionFade`](#/document/_util) | `false` |
