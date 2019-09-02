A foundational component for inputting text into the app via a keyboard.

Use with `useInput`

## Demo

## API

Extends [`input`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input)

### Input

React.Dom

| Properties  | Descrition      | Type              | Default | Required |
| ----------- | --------------- | ----------------- | ------- | -------- |
| tag         | Input's title   | `React.ReactNode` | -       | `false`  |
| beforeInput | Before input    | `React.ReactNode` | -       | `false`  |
| afterInput  | After input     | `React.ReactNode` | -       | `false`  |
| hideEye     | Hide eye icon   | `boolean`         | `false` | `false`  |
| hideClear   | Hide clear icon | `boolean`         | `false` | `false`  |

### Input.useInput

**Options**

| Properties      | Descrition                   | Type                  | Default | Required |
| --------------- | ---------------------------- | --------------------- | ------- | -------- |
| initialValue    | Initial value                | `InputProps['value']` | -       | `false`  |
| validationRules | Validation rules, as follows | `ValidationRules[]`   | -       | `false`  |

ValidationRules

| Properties | Descrition                                                  | Type              | Default | Required |
| ---------- | ----------------------------------------------------------- | ----------------- | ------- | -------- |
| reg        | RegExp                                                      | `RegExp`          | -       | `true`   |
| validated  | The state of validated when `reg.test(inputValue) === true` | `boolean`         | -       | `true`   |
| message    | The message `reg.test(inputValue) === true`                 | `React.ReactNode` | -       | `true`   |
