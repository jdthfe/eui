export interface CountDownProps extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    /** The End Time，the CountDown will stop from the current time to the end time , which can be a Date Object or number, default value is 0*/
    endDate?: Date | number;

    /** type: Hot to display CountDown , 4: day-hour-minuts-second： 3：hour-minuts-second， 2：minuts-second， 1：second. default: 1*/
    type?: number | string;

    /** timeUnit，text between the gab，i.e：['day','hour','minuts','second'] 或 [':',':',':'] default：【】*/
    unit?: string[];

    /** callback, when the left time is 0 */
    timeUp?: (() => void) | undefined;

    /** the CountDown to start */
    go?: boolean;
}
