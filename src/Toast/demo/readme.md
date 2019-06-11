The Toast component is useful for displaying dismissable information or simple actions at (normally) the bottom of the page.

This component does not block user input, allowing the app to continue its flow. Furthermore, it can be automatically hidden after a timeout.

## Demo

## API

Extends `div`

### Toast

React.Dom

| Properties | Descrition | Type | Default | Required |
| --- | --- | --- | --- | --- |
| coverProps | cover's props | [`CoverWithTransitionWrap`](#/document/Cover) | - | `false` |
| [`...Portal`](#/document/Portal) |  |  |  |  |
| [`...TransitionWrap`](#/document/TransitionWrap) |  |  |  |  |
| [transitionClassName](#/document/TransitionWrap) | The animation classNames applied to the component as it enters, exits or has finished the transition. | `string` | [`transitionFade`](#/document/variable) | `false` |

---

### Toast.model

Call `const close = Toast.model()` to show, call `close()` to turn it off immediately. If `children` is empty, it will not be displayed

### Toast.success

Call `const close = Toast.success()` to show, call `close()` to turn it off immediately. With the icon `<Icon value="success" />`

### Toast.alert

Call `const close = Toast.alert()` to show, call `close()` to turn it off immediately. With the icon `<Icon value="alert" />`

#### Generic API for the above three methods

| Properties | Descrition | Type | Default | Required |
| --- | --- | --- | --- | --- |
| noCover | Whether to hide toast's transparent cover, which will prevent touch event of the whole page | `boolean` | - | `false` |
| duration | Delay time to close, which units is second ( If set duration = 0, toast will not auto hide, you have to manually do it ) | `number` | [defaultDuration](#/document/variable) | `false` |
| [`...Toast`](#/document/Toast) |  |  |  |  |
| [time](#/document/TransitionWrap) | The duration of the transition, in milliseconds. | `number` | [transitionTime](#/document/variable) | `false` |

---

### Toast.loading

Call `Toast.loading()` to show，call `Toast.closeLoading()` to turn it off immediately. With the icon `<Icon value="loading" />`

The biggest difference from the above Toast is that loading is a singleton function. After the multiple calls, subject to the last one

| Properties | Descrition | Type | Default | Required |
| --- | --- | --- | --- | --- |
| noCover | Whether to hide toast's transparent cover, which will prevent touch event of the whole page | `boolean` | - | `false` |
| duration | Delay time to close, which units is second ( If set duration = 0, toast will not auto hide, you have to manually do it ) | `number` | `0` | `false` |
| [`...Toast`](#/document/Toast) |  |  |  |  |
| [time](#/document/TransitionWrap) | The duration of the transition, in milliseconds. | `number` | [transitionTime](#/document/variable) | `false` |

### Toast.closeLoading

A Global method to destroy `Toast.loading`
