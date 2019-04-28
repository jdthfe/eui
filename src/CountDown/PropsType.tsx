export interface CountDownProps extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    /** 结束的时间，即倒计时会从当前时间一直到endDate停止，可以是一个日期对象，也可以是毫秒数 默认值：0*/
    endDate?: Date | number;
    /** 类型：要怎么显示倒计时：4-日时分秒，3-时分秒，2-分秒，1-秒 默认值：4*/
    type?: number | string;
    /** 时间单位，显示在空隙之间的文字，比如：['天','时','分','秒'] 或 [':',':',':'] 默认值：【】*/
    unit?: string[];
    /**当倒计时走到0时会触发一次，表示时间到了 */
    timeUp?: (() => void) | undefined;
}
