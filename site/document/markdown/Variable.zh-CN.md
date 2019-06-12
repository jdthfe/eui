组件中一些常用的变量

```tsx
import prefix from './prefix';

export default {
    defaultDuration: 2000,

    transitionTime: 160,
    transitionFade: `${prefix}-fade`,
    transitionZoom: `${prefix}-zoom`,
};
```

如何使用

```tsx
import { Variable } from 'eui';
// import Variable from 'eui/compiled/lib/_util/variable.js'; // 如果使用了 babel-plugin-import

console.log(Variable.defaultDuration); // 2000
```
