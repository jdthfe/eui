this is a CountDown Module

## Demo

countdown

## API

| Properties | Descrition                                                                                                                             | Type                       | Default    | Required |
| ---------- | -------------------------------------------------------------------------------------------------------------------------------------- | -------------------------- | ---------- | -------- |
| endDate    | The End Time，the CountDown will stop from the current time to the end time , which can be a Date Object or number, default value is 0 | `Date | number`            | `0`        | `false`  |
| type       | type: Hot to display CountDown , 4: day-hour-minuts-second： 3：hour-minuts-second， 2：minuts-second， 1：second. default: 1          | `number | string`          | `1`        | `false`  |
| unit       | timeUnit，text between the gab，i.e：['day','hour','minuts','second'] 或 [':',':',':'] default：【】                                   | `string[]`                 | `['']`     | `false`  |
| timeUp     | callback, when the left time is 0                                                                                                      | `(() => void) | undefined` | `() => {}` | `false`  |
