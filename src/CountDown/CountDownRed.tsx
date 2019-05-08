import React, { useEffect, useRef, useReducer } from 'react';
import classnames from 'classnames';
import prefix from '../_util/prefix';
const prefixCls = `${prefix}-countdown`;
import { CountDownProps } from './PropsType';

export const CountDown = (props: CountDownProps) => {
    const { type = 1, unit = [''], endDate = 0, timeUp = () => {}, className, ...restProps } = props;
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
                day = Math.round(t / 86400); // 剩余的天
                hour = Math.round(t / 3600 - day * 24); // 剩余的小时 已排除天
                min = Math.round(t / 60 - day * 1440 - hour * 60); // 剩余的分钟 已排除天和小时
                second = Math.round(t - day * 86400 - hour * 3600 - min * 60); // 剩余的秒
                break;
            case 3:
                hour = Math.round(t / 3600); // 剩余的小时
                min = Math.round(t / 60 - hour * 60); // 剩余的分钟 已排小时
                second = Math.round(t - hour * 3600 - min * 60); // 剩余的秒
                break;
            case 2:
                min = Math.round(t / 60); // 剩余的分钟
                second = Math.round(t - min * 60); // 剩余的秒
                break;
            case 1:
                second = Math.round(t); // 剩余的秒
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
    const cls = classnames(prefixCls, className);
    const endDateConst: any = useRef();

    useEffect(() => {
        const currentTime: any = Math.floor(new Date().getTime() / 1000);
        const leftTime = endDate instanceof Date ? (endDate.getTime() - new Date().getTime()) / 1000 : endDate;
        endDateConst.current = leftTime + currentTime;
    }, [endDate]);

    const initCounterState = {
        allTime: leftTime + new Date().getTime() / 1000,
        leftTime,
    };

    function reducer(state: any, action: any) {
        const currentTime = new Date().getTime() / 1000;
        // endDateConst.current = leftTime + currentTime;
        switch (action.type) {
            case 'interval':
                // console.log(endDateConst.current);
                return { leftTime: endDateConst.current - currentTime };
            default:
                return state.count;
        }
    }

    const [state, dispatch] = useReducer(reducer, initCounterState);
    // dispatch({ type: 'interval' });

    // if (state.leftTime > 0) {
    //     // clearInterval(id);
    //     id = setInterval(() => {
    //         dispatch({ type: 'interval' });
    //         clearInterval(id);
    //     }, 1000);
    //     // clearInterval(id);
    // } else {
    //     clearInterval(id);
    //     timeUp();
    // }

    useEffect(() => {
        // dispatch({ type: 'interval' });
        let id: any = '';
        if (state.leftTime > 0) {
            id = setInterval(() => {
                dispatch({ type: 'interval' });
            }, 1000);
        } else {
            clearInterval(id);
            // dispatch({ type: 'intervalEnd' });
            timeUp();
        }
        return () => clearInterval(id);
    });

    return (
        <div className={cls} {...restProps}>
            {getTimeData(state.leftTime).map((time, index) => (
                <span key={index}>
                    {time} {index < unit.length ? unit[index] + ' ' : ''}
                </span>
            ))}
        </div>
    );
};
