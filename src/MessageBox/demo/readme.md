description

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
