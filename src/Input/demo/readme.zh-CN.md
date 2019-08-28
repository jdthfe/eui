用于输入数据的 Input 组件，配合本身的 `useInput` 使用。

## Demo

其他描述

## API

继承 [`input`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input)

### Input

React.Dom

| 属性        | 说明                 | 类型              | 默认值  | 必填    |
| ----------- | -------------------- | ----------------- | ------- | ------- |
| tag         | 标题                 | `React.ReactNode` | -       | `false` |
| beforeInput | input 前置空位       | `React.ReactNode` | -       | `false` |
| afterInput  | After 后置空位       | `React.ReactNode` | -       | `false` |
| hideEye     | 隐藏切换密码状态图标 | `boolean`         | `false` | `false` |
| hideClear   | 隐藏清除输入图标     | `boolean`         | `false` | `false` |

### Input.useInput

参数 **Options**

| 属性            | 说明                         | 类型                  | 默认值 | 必填    |
| --------------- | ---------------------------- | --------------------- | ------ | ------- |
| initialValue    | input 初始值                 | `InputProps['value']` | -      | `false` |
| validationRules | value 校验规则，详细参数如下 | `ValidationRules[]`   | -      | `false` |

ValidationRules

| 属性      | 说明                                                        | 类型              | 默认值 | 必填   |
| --------- | ----------------------------------------------------------- | ----------------- | ------ | ------ |
| reg       | RegExp                                                      | `RegExp`          | -      | `true` |
| validated | The state of validated when `reg.test(inputValue) === true` | `boolean`         | -      | `true` |
| message   | The message `reg.test(inputValue) === true`                 | `React.ReactNode` | -      | `true` |
