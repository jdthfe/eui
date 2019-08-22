组件中一些常用的变量

```tsx
export const prefix = 'eui';
export const Variable = {
    defaultDuration: 2000,
    transitionTime: 160,
    transitionFade: `${prefix}-fade`,
    transitionZoom: `${prefix}-zoom`,
};

export const removeNode = (el: HTMLDivElement) => {
    if (el.remove) {
        el.remove();
    } else if (el.parentNode) {
        el.parentNode.removeChild(el);
    }
};

export default {
    prefix,
    Variable,
    removeNode,
};
```

如何使用

```tsx
import { _util } from '@jdthfe/eui';
// import _util from 'eui/compiled/lib/_util/'; // 如果使用了 babel-plugin-import

const { Variable } = _util;
console.log(Variable.defaultDuration); // 2000
```
