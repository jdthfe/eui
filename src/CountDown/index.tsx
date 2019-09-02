import React, { useState, useEffect, useRef } from 'react';
import classnames from 'classnames';
import { prefix } from '../_util/';
const prefixCls = `${prefix}-countdown`;
import { CountDownProps } from './PropsType';

const CountDown = (props: CountDownProps) => {
    const { go = false, type = 1, unit = [''], endDate = 0, timeUp = () => {}, className, ...restProps } = props;
    const endDateConst: any = useRef();
    const costTime = useRef<number>(0);
    // 计算剩余时间
    const leftTime: any = endDate instanceof Date ? (endDate.getTime() - new Date().getTime()) / 1000 : endDate;

    // 秒转换为时、分、秒
    const getTimeData = (t: any) => {
        let day = 0; // 剩余的天
        let hour = 0; // 剩余的小时
        let min = 0; // 剩余的分钟
        let second = 0; // 剩余的秒

        switch (type) {
            case 4:
                day = Math.floor(t / 86400); // 剩余的天
                hour = Math.floor(t / 3600 - day * 24); // 剩余的小时 已排除天
                min = Math.floor(t / 60 - day * 1440 - hour * 60); // 剩余的分钟 已排除天和小时
                second = Math.floor(t - day * 86400 - hour * 3600 - min * 60); // 剩余的秒
                break;
            case 3:
                hour = Math.floor(t / 3600); // 剩余的小时
                min = Math.floor(t / 60 - hour * 60); // 剩余的分钟 已排小时
                second = Math.floor(t - hour * 3600 - min * 60); // 剩余的秒
                break;
            case 2:
                min = Math.floor(t / 60); // 剩余的分钟
                second = Math.floor(t - min * 60); // 剩余的秒
                break;
            case 1:
                second = Math.floor(t); // 剩余的秒
                break;
            default:
                break;
        }

        const arr = [];
        type >= 4 && arr.push(String(day).padStart(2, '0'));
        type >= 3 && arr.push(String(hour).padStart(2, '0'));
        type >= 2 && arr.push(String(min).padStart(2, '0'));
        arr.push(String(second).padStart(2, '0'));

        return arr;
    };

    const initialValue = getTimeData(leftTime);
    const [timeArray, setTimeArray] = useState(initialValue);
    const cls = classnames(prefixCls, className);
    function tick() {
        const id = window.setInterval(() => {
            let currentTime: any = Math.floor(new Date().getTime() / 1000);
            costTime.current += 1;
            if (endDateConst.current - currentTime >= 0) {
                let timeD: any = getTimeData(endDateConst.current - currentTime);
                setTimeArray(timeD as any);
            } else {
                window.clearInterval(id);
                timeUp();
            }
        }, 1000);
        return id;
    }

    useEffect(() => {
        if (!go) return;
        const currentTime: any = Math.floor(new Date().getTime() / 1000);
        const leftTime =
            endDate instanceof Date ? (endDate.getTime() - new Date().getTime()) / 1000 : endDate - costTime.current;
        endDateConst.current = leftTime + currentTime;
    }, [endDate, go]);

    useEffect(() => {
        let id: number;
        if (go) {
            id = tick();
        }
        return () => window.clearInterval(id);
    });

    return (
        <div className={cls} {...restProps}>
            {timeArray.map((time, index) => (
                <span key={index}>
                    {time} {index < unit.length ? unit[index] + ' ' : ''}
                </span>
            ))}
        </div>
    );
};

export default CountDown;
