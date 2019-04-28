# TransitionWrap

简易的动画组件

## Demo

## Style

```scss
.hello {
    opacity: 1;
    transition: all 0.5s;
}
.hello-entry {
    opacity: 0;
}
.hello-exit-active {
    opacity: 0;
}

.world {
    opacity: 0;
    transition: all 0.5s;
}
.world-entry-active,
.world-entry-done {
    opacity: 1;
}
.world-exit-active {
    opacity: 0;
}
```

other description

## API

| 属性                | 说明                            | 类型                                        | 默认值         | 必填    |
| ------------------- | ------------------------------- | ------------------------------------------- | -------------- | ------- |
| visible             | 是否展示                        | `boolean`                                   | `true`         | `false` |
| time                | active 动画持续时长             | `number`                                    | `0`            | `false` |
| transitionClassName | 动画的属性名                    | `string`                                    | `'transition'` | `false` |
| keepOnExit          | visible 为 false 时节点也不删除 | `boolean`                                   | `false`        | `false` |
| onExitDone          | 动画完成时的回调函数            | `() => void`                                | `() => {}`     | `false` |
| children            | 子组件，可以包含多个            | `React.ReactElement | React.ReactElement[]` | -              | `true`  |
