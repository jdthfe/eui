> reference: [React Transition Group](https://reactcommunity.org/react-transition-group/)

Simple animation component

The animation classNames applied to the component as it enters, exits or has finished the transition. A single name can be provided and it will be suffixed for each stage: e.g.

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

other description

## API

children : `React.ReactElement | React.ReactElement[]`

| Properties | Descrition | Type | Default | Required |
| --- | --- | --- | --- | --- |
| visible | Show the component; triggers the enter or exit states | `boolean` | `false` | `false` |
| time | The duration of the transition, in milliseconds | `number` | `0` | `false` |
| transitionClassName | The animation classNames applied to the component as it enters, exits or has finished the transition | `string` | `'transition'` | `false` |
| keepOnExit | By default the child component unmount after it reaches the 'exit-done' state. Set keepOnExit if you'd prefer to retain the component after it finishes exiting. | `boolean` | `false` | `false` |
| onExitDone | Callback fired after the "exit-done" status is applied. | `() => void` | `() => {}` | `false` |
