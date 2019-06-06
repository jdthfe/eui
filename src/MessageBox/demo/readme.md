description

## Rule

-   尽可能少用。Modal 会打断用户操作，只用在重要的时候。
-   标题应该简明，不能超过 1 行；描述内容应该简明、完整，一般不多于 2 行。
-   操作按钮最多到 3 个（竖排可以使用 multiLineButtons 样式），一般为 1-2 个（横排）；
-   一般将用户最可能点击的按钮，放在右侧。另外，取消按钮应当始终放在左侧。

## Demo

other description

## API

| Properties | Descrition  | Type     | Default     | Required |
| ---------- | ----------- | -------- | ----------- | -------- |
| prop       | description | `string` | `'default'` | `false`  |

| Properties        | Descrition                                                                               | Type                      | Default | Required |
| ----------------- | ---------------------------------------------------------------------------------------- | ------------------------- | ------- | -------- |
| title             | Title                                                                                    | `string`                  | -       | `false`  |
| buttons           | ButtonProps list，When `multiLine = false`, the button is rendered from left to right    | `ButtonProps[]`           | -       | `false`  |
| multiLineButtons  | Let each button take a single line                                                       | `boolean`                 | -       | `false`  |
| hiddenline        | Hidden the line before buttons                                                           | `boolean`                 | -       | `false`  |
| onClickCloseIcon  | Callback on click the cross button. When the value is empty, the button is not displayed | `() => void`              | -       | `false`  |
| coverProps        | CoverProps                                                                               | `CoverWithTransitionWrap` | -       | `false`  |
| onClickCloseIcon  | Callback on click the cross button. When the value is empty, the button is not displayed | `() => void | boolean`    | -       | `false`  |
| preventClickCover | On click cover, return `true` to prvent                                                  | `boolean`                 | -       | `false`  |
| onClickCover      | On click cover, return `true` to prvent                                                  | `() => void | boolean`    | -       | `false`  |
| noCover           | Cover will block page clicks                                                             | `boolean`                 | -       | `false`  |
| confirmButton     |                                                                                          | `ButtonProps`             | -       | `false`  |
| confirmCallback   |                                                                                          | `() => void | boolean`    | -       | `false`  |
| confirmChildren   |                                                                                          | `React.ReactNode`         | -       | `false`  |
| cancelButton      |                                                                                          | `ButtonProps`             | -       | `false`  |
| cancelCallback    |                                                                                          | `() => void | boolean`    | -       | `false`  |
| cancelChildren    |                                                                                          | `React.ReactNode`         | -       | `false`  |
