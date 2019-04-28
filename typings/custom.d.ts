// 存放通用方法
// type Omit<T, K> = Pick<T, Exclude<keyof T, K>>;
// 取出所有选填属性
// type NullableKeys<T> = { [K in keyof T]-?: undefined extends T[K] ? K : never }[keyof T];

// declare module '*.svg' {
//     const content: any;
//     export default content;
// }
