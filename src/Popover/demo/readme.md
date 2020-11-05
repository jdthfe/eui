After clicking on a control or an area, a Popover menu appears for doing more. If set mask prop, it is recommended to exit by clicking on any of the mask layers.

## Demo

## API

Extends `div`

| Properties | Descrition | Type | Default | Required |
| --- | --- | --- | --- | --- |
| anchorEl | Anchor element of Popover | `HTMLElement | null` | - | `true` |
| dir | The direction of Popover relative to the anchor element | `'top-left' | 'top-center' | 'top-right' | 'bottom-left' | 'bottom-center' | 'bottom-right'` | - | `true` |
| onClickCover | When the value is empty or false, the cover is not displayed. On click cover, **return `false` to prvent Popover's close** | `(() => void | boolean) | boolean` | `true` | `false` |
| hasArrow | Whether the arrow is included or not | `boolean` | `false` | `false` |
| coverProps | cover's props | [`CoverWithTransitionWrap`](#/document/Cover) | - | `false` |
| [`...TransitionWrap`](#/document/TransitionWrap) |  |  |  |  |
