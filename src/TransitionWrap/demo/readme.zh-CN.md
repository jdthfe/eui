> reference: [React Transition Group](https://reactcommunity.org/react-transition-group/)

简易的动画组件

特定 className 会在组件出现或者消失等不同阶段被赋予。可以提供单个 className，作为每个阶段的前缀：例如

_transitionClassName="fade" applies fade-enter, fade-enter-active, fade-enter-done, fade-exit, fade-exit-active and fade-exit-done._

## Demo

## Style

```css
/* demo style */
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

## API

子组件 : `React.ReactElement | React.ReactElement[]`

| 属性                | 说明                                     | 类型         | 默认值         | 必填    |
| ------------------- | ---------------------------------------- | ------------ | -------------- | ------- |
| visible             | 是否展示                                 | `boolean`    | `true`         | `false` |
| time                | active 动画持续时长，单位为毫秒          | `number`     | `0`            | `false` |
| transitionClassName | 组件展示和消失时不同阶段的属性名前缀     | `string`     | `'transition'` | `false` |
| keepOnExit          | visible 为 false 时节点也不删除          | `boolean`    | `false`        | `false` |
| onExitDone          | visible 为 false，且动画完成时的回调函数 | `() => void` | `() => {}`     | `false` |
