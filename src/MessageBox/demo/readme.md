Use to show important information for the system, and ask for user feedback. eg: When deleting an important content, pop up a Modal for secondary confirmation.

When there are more than 2 action buttons, it is recommended to use the multiLineButtons style to have the buttons line up vertically.

## Demo

## API

Extends `div`

### MessageBox

React.Dom

| Properties | Descrition | Type | Default | Required |
| --- | --- | --- | --- | --- |
| title | Title | `string` | `''` | `false` |
| buttons | ButtonProps list，When `multiLine = false`, the button is rendered from left to right | `ButtonProps[]` | `[]` | `false` |
| multiLineButtons | Let each button take a single line | `boolean` | `false` | `false` |
| hiddenline | Hidden the line before buttons | `boolean` | `undefined` | `false` |
| onClickCloseIcon | Callback on click the cross button. When the value is empty or false, the button is not displayed | `(() => void) | boolean` | `false` | `false` |
| coverProps | CoverProps | `CoverWithTransitionWrap` | `{}` | `false` |
| [`...Portal`](#/document/Portal) |  |  |  |  |
| [`...TransitionWrap`](#/document/TransitionWrap) |  |  |  |  |
| [transitionClassName](#/document/TransitionWrap) | The animation classNames applied to the component as it enters, exits or has finished the transition. | `string` | [`transitionFade`](#/document/_util) | `false` |

---

### MessageBox.model

Call `const close = MessageBox.model()` to show, call `close()` to turn it off immediately. （**Prevents the MessageBox from closing when `onClick` in `buttons[]` returns `true`**. The same below）

| Properties | Descrition | Type | Default | Required |
| --- | --- | --- | --- | --- |
| [`...MessageBox`](#/document/MessageBox) |  |  |  |  |
| onClickCloseIcon | Callback on click the cross button. When the value is empty or false, the button is not displayed. **return `false` to prvent Message's close** | `(() => void | boolean) | boolean` | `false` | `false` |
| onClickCover | When the value is empty or false, the cover is not displayed. On click cover, **return `false` to prvent Message's close** | `(() => void | boolean) | boolean` | `true` | `false` |

### MessageBox.alert

Call `const close = MessageBox.alert()` to show, call `close()` to turn it off immediately. Comes with a confirmation button

| Properties | Descrition | Type | Default | Required |
| --- | --- | --- | --- | --- |
| [`...MessageBox.model`](#/document/MessageBox) |  |  |  |  |
| confirmButton | confirmButton’s props | `ButtonProps` | `{}` | `false` |
| confirmCallback | confirmButton’s callback, **return `false` to prvent Message's close** | `() => void | boolean` | `() => {}` | `false` |
| confirmChildren | confirmButton’s children | `React.ReactNode` | `false` | `false` |

### MessageBox.confirm

Call `const close = MessageBox.confirm()` to show, call `close()` to turn it off immediately. Comes with a confirmation button and a cancel button

| Properties | Descrition | Type | Default | Required |
| --- | --- | --- | --- | --- |
| [`...MessageBox.alert`](#/document/MessageBox) |  |  |  |  |
| cancelButton | cancelButton’s props | `ButtonProps` | `{}` | `false` |
| cancelCallback | cancelButton’s callback, **return `false` to prvent Message's close** | `() => void | boolean` | `() => {}` | `false` |
| cancelChildren | cancelButton’s children | `React.ReactNode` | `false` | `false` |
