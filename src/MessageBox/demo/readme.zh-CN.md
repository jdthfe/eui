用作显示系统的重要信息，并请求用户进行操作反馈，eg：删除某个重要内容时，弹出 Modal 进行二次确认。

## Rule

-   尽可能少用。Modal 会打断用户操作，只用在重要的时候。
-   标题应该简明，不能超过 1 行；描述内容应该简明、完整，一般不多于 2 行。
-   操作按钮最多到 3 个（竖排可以使用 multiLineButtons 样式），一般为 1-2 个（横排）；
-   一般将用户最可能点击的按钮，放在右侧。另外，取消按钮应当始终放在左侧。

## Demo

## API

Extends `div`

### MessageBox

React.Dom

| 属性                                             | 说明                                                                                     | 类型                                          | 默认值                                  | 必填    |
| ------------------------------------------------ | ---------------------------------------------------------------------------------------- | --------------------------------------------- | --------------------------------------- | ------- |
| title                                            | 标题                                                                                     | `string`                                      | `''`                                    | `false` |
| buttons                                          | 按钮属性列表，从左渲染到右。当 `multiLine = true` 时从上到下                             | [`Button`](#/document/Button)`[]`             | `[]`                                    | `false` |
| multiLineButtons                                 | 每个按钮独占一行                                                                         | `boolean`                                     | `false`                                 | `false` |
| hiddenline                                       | 隐藏内容和按钮之间的分割线                                                               | `boolean`                                     | `undefined`                             | `false` |
| onClickCloseIcon                                 | 点击关闭图标时触发的函数                                                                 | `() => void`                                  | `undefined`                             | `false` |
| transitionClassName                              | 动画属性（设置 `coverProps` 中的 `transitionClassName`，可以让遮罩和窗口有不同动画属性） | `string`                                      | [`transitionFade`](#/document/variable) | `false` |
| coverProps                                       | MessageBox 中，Cover 的 props                                                            | [`CoverWithTransitionWrap`](#/document/Cover) | `{}`                                    | `false` |
| [`...Portal`](#/document/Portal)                 |                                                                                          |                                               |                                         |         |
| [`...TransitionWrap`](#/document/TransitionWrap) |                                                                                          |                                               |                                         |         |

### MessageBox.model

通过 `const close = MessageBox.model()` 调用，运行 `close()` 可以立即关闭。（`buttons[]` 中的 `onClick` **返回 `true`** 时阻止 MessageBox 关闭。下同）

| 属性                                     | 说明                                                             | 类型                   | 默认值      | 必填    |
| ---------------------------------------- | ---------------------------------------------------------------- | ---------------------- | ----------- | ------- |
| [`...MessageBox`](#/document/MessageBox) |                                                                  |                        |             |         |
| preventClickCover                        | 阻止点击 `Cover`                                                 | `boolean`              | `false`     | `false` |
| onClickCover                             | 点击遮罩时触发的函数。**返回 `true` 时阻止 MessageBox 关闭**     | `() => void | boolean` | `undefined` | `false` |
| onClickCloseIcon                         | 点击关闭图标时触发的函数。**返回 `true` 时阻止 MessageBox 关闭** | `() => void | boolean` | `undefined` | `false` |

### MessageBox.alert

通过 `const close = MessageBox.alert()` 调用，运行 `close()` 可以立即关闭。附带一个确认按钮

| 属性                                           | 说明                                                             | 类型                          | 默认值     | 必填    |
| ---------------------------------------------- | ---------------------------------------------------------------- | ----------------------------- | ---------- | ------- |
| [`...MessageBox.model`](#/document/MessageBox) |                                                                  |                               |            |         |
| confirmButton                                  | 确认按钮的属性，返回 `true` 时阻止关闭                           | [`Button`](#/document/Button) | `{}`       | `false` |
| confirmCallback                                | 点击确认按钮时触发的函数。**返回 `true` 时阻止 MessageBox 关闭** | `() => void | boolean`        | `() => {}` | `false` |
| confirmChildren                                | 确认按钮的内容                                                   | `React.ReactNode`             | `confirm`  | `false` |

### MessageBox.confirm

通过 `const close = MessageBox.confirm()` 调用，运行 `close()` 可以立即关闭。附带一个确认按钮和一个取消按钮

| 属性                                           | 说明                                                             | 类型                          | 默认值     | 必填    |
| ---------------------------------------------- | ---------------------------------------------------------------- | ----------------------------- | ---------- | ------- |
| [`...MessageBox.alert`](#/document/MessageBox) |                                                                  |                               |            |         |
| cancelButton                                   | 取消按钮的属性，返回 `true` 时阻止关闭                           | [`Button`](#/document/Button) | `{}`       | `false` |
| cancelCallback                                 | 点击取消按钮时触发的函数。**返回 `true` 时阻止 MessageBox 关闭** | `() => void | boolean`        | `() => {}` | `false` |
| cancelChildren                                 | 取消按钮的内容                                                   | `React.ReactNode`             | `confirm`  | `false` |
