Common variables in components

```tsx
import prefix from './prefix';

export default {
    defaultDuration: 2000,

    transitionTime: 160,
    transitionFade: `${prefix}-fade`,
    transitionZoom: `${prefix}-zoom`,
};
```

Usage

```tsx
import { Variable } from '@jdthfe/eui';
// import Variable from 'eui/compiled/lib/_util/variable.js'; // If you use babel-plugin-import

console.log(Variable.defaultDuration); // 2000
```
