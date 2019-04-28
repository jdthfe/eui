# Props design specification

属性设计规范

## boolean 属性名的设计

如果属性是 `boolean` 类型，请保证默认值为 `false`

例：按钮组件可以控制圆角 or 直角，默认为圆角。当用户需要直角按钮时

```jsx
// bad - 使用 radius（半径）作为变量名，默认 radius = true
<Button radius={false}/>

// good - 使用 rectangle（矩形）作为变量名，默认 rectangle = false。
<Button rectangle/>
```

简而言之，不要出现布尔属性存在值为 `name={false}` 的情况，
