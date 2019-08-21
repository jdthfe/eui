Common variables in components

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

Usage

```tsx
import { _util } from '@jdthfe/eui';
// import _util from 'eui/compiled/lib/_util/'; // If you use babel-plugin-import

const { Variable } = _util;
console.log(Variable.defaultDuration); // 2000
```
