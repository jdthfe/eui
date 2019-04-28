import React, { useState, useEffect } from 'react';

import { CountDownProps } from './PropsType';
import classnames from 'classnames';
import prefix from '../_util/prefix';
const prefixCls = `${prefix}-countdown`;
const STORAGE = window.localStorage || {};
const CDOWN_KEY = 'EDM_CDOWN_KEY';

export const CountDown = (props: CountDownProps) => {
    const {
        endDate = 0,
        type = 1,
        unit = [''],
        timeUp = () => {},
        className,
        id = 'edm_coundow',
        ...restProps
    } = props;
    const cls = classnames(prefixCls, className);

    // 秒转换为时、分、秒
    const getTimeData = (t: any) => {
        let day = 0; // 剩余的天
        let hour = 0; // 剩余的小时
        let min = 0; // 剩余的分钟
        let second = 0; // 剩余的秒
        // const type = type; // 时间类型

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

    // 开始倒计时的当前时间
    const currentTime: number = Math.floor(new Date().getTime() / 1000);

    // 最终的时间 = 当前时间 + 倒计时时间
    const endTime: any = endDate instanceof Date ? endDate.getTime() / 1000 : currentTime + endDate;

    // 存储倒计时的key
    const key = `${id}_${CDOWN_KEY}`;

    let storageCountDown = Number(STORAGE.getItem(key)); // 获取localStorage当前倒计时时间

    if (!storageCountDown) {
        storageCountDown = endTime;
        STORAGE.setItem(key, storageCountDown + '');
    } else {
        //如果存在的话，重新赋值
        storageCountDown = Number(STORAGE.getItem(key));
    }

    const initialValue = getTimeData(storageCountDown - currentTime);
    const [timeArray, setTimeArray] = useState(initialValue);
    useEffect(() => {
        let intervalId: any;
        function tick() {
            const currentTime: number = Math.floor(new Date().getTime() / 1000);
            if (storageCountDown >= currentTime) {
                let t = storageCountDown - currentTime; // 剩余的毫秒数
                let tempArr = getTimeData(t);
                setTimeArray(tempArr);
            } else {
                clearInterval(intervalId);
                STORAGE.removeItem(key);
                timeUp();
            }
        }
        intervalId = setInterval(tick, 1000);
        return () => clearInterval(intervalId);
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
