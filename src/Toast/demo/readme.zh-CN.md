一种轻量级反馈/提示，可以用来显示不会打断用户操作的内容，适合用于页面转场、数据交互的等场景中。

提供两种调用方式，一种为常见的 `React Dom`，一种为执行方法（所有的方法都是基于第一种的封装。如果有特殊需求，可以通过自行封装来实现）

## Demo

## API

继承 `div`

### Toast

React.Dom

| 属性 | 说明 | 类型 | 默认值 | 必填 |
| --- | --- | --- | --- | --- |
| coverProps | Toast 中，Cover 的 props | [`CoverWithTransitionWrap`](#/document/Cover) |  | `false` |
| [`...Portal`](#/document/Portal) |  |  |  |  |
| [`...TransitionWrap`](#/document/TransitionWrap) |  |  |  |  |
| [transitionClassName](#/document/TransitionWrap) | 动画属性 | `string` | [`transitionFade`](#/document/_util) | `false` |

---

### Toast.model

通过 `const close = Toast.model()` 调用，运行 `close()` 可以立即关闭。如果 `children` 为空，则不展示

### Toast.success

通过 `const close = Toast.success()` 调用，运行 `close()` 可以立即关闭。默认附带 `<Icon value="success" />`

### Toast.alert

通过 `const close = Toast.alert()` 调用，运行 `close()` 可以立即关闭。默认附带 `<Icon value="alert" />`

#### 上述三个方法的通用 API

| 属性 | 说明 | 类型 | 默认值 | 必填 |
| --- | --- | --- | --- | --- |
| time | active 动画持续时长（TransitionWrap） | `number` | [transitionTime](#/document/_util) | `false` |
| noCover | 是否展示遮罩 | `boolean` | `false` | `false` |
| [`...Toast`](#/document/Toast) |  |  |  |  |
| [time](#/document/TransitionWrap) | 持续时间（0 表示不自动关闭） | `number` | [defaultDuration](#/document/_util) | `false` |

---

### Toast.loading

通过 `Toast.loading()` 调用，运行 `Toast.closeLoading()` 可以立即关闭。默认附带 `<Icon value="loading" />`

与上述 Toast 最大区别是，loading 为单例函数。多次调用之后以最后一次为准。

| 属性 | 说明 | 类型 | 默认值 | 必填 |
| --- | --- | --- | --- | --- |
| time | active 动画持续时长（TransitionWrap） | `number` | [transitionTime](#/document/_util) | `false` |
| noCover | 是否展示遮罩 | `boolean` | `false` | `false` |
| [`...Toast`](#/document/Toast) |  |  |  |  |
| [time](#/document/TransitionWrap) | 持续时间（0 表示不自动关闭） | `number` | `0` | `false` |

### Toast.closeLoading

用以在任何上下文中关闭 `Toast.loading`
