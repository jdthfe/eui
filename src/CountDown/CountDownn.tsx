import React, { useState, useEffect, useRef } from 'react';
import classnames from 'classnames';
import prefix from '../_util/prefix';
const prefixCls = `${prefix}-countdown`;
import { CountDownProps } from './PropsType';

export const CountDown = (props: CountDownProps) => {
    const { type = 1, unit = [''], endDate = 0, timeUp = () => {}, className, ...restProps } = props;

    const endDateConst: any = useRef();

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
    const initialValue = getTimeData(endDate);
    const [timeArray, setTimeArray] = useState(initialValue);
    const cls = classnames(prefixCls, className);

    function tick() {
        return setInterval(() => {
            let currentTime: any = Math.floor(new Date().getTime() / 1000);
            const timeD: any = getTimeData(endDateConst.current - currentTime);
            setTimeArray(timeD as any);
        }, 1000);
    }

    useEffect(() => {
        let currentTime: any = Math.floor(new Date().getTime() / 1000);
        endDateConst.current = endDate + currentTime;
    }, [endDate]);

    useEffect(() => {
        let id = tick();
        return () => clearInterval(id);
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
    // const [count, setCount] = useState(100);

    // const initialState = { count: 100 };
    // function reducer(state: any, action: any) {
    //     switch (action.type) {
    //         case 'interval':
    //             return { count: state.count - 1 };
    //         default:
    //             return state.count;
    //     }
    // }

    // const [state, dispatch] = useReducer(reducer, initialState);
    // useEffect(() => {
    //     let id: any = '';
    //     id = setInterval(() => {
    //         dispatch({ type: 'interval' });
    //     }, 1000);

    //     return clearInterval(id);
    // });

    // let id: any = '';
    // id = setInterval(() => {
    //     dispatch({ type: 'interval' });
    //     clearInterval(id);
    // }, 1000);

    // const initialState = 0;
    // const reducer = (state: any, action: any) => {
    //     switch (action.type) {
    //         case 'increment':
    //             return state + 1;
    //         case 'decrement':
    //             return state - 1;
    //         case 'set':
    //             return action.count;
    //         default:
    //             throw new Error('Unexpected action');
    //     }
    // };

    // const [count1, dispatch1] = useReducer(reducer, initialState);
    // const [count2, dispatch2] = useReducer(reducer, initialState);
    // return (
    //     <>
    //         <div>
    //             {count1}
    //             <button onClick={() => dispatch1({ type: 'increment' })}>+1</button>
    //             <button onClick={() => dispatch1({ type: 'decrement' })}>-1</button>
    //             <button onClick={() => dispatch1({ type: 'set', count: 0 })}>reset</button>
    //         </div>
    //         <div>
    //             {count2}
    //             <button onClick={() => dispatch2({ type: 'increment' })}>+1</button>
    //             <button onClick={() => dispatch2({ type: 'decrement' })}>-1</button>
    //             <button onClick={() => dispatch2({ type: 'set', count: 0 })}>reset</button>
    //         </div>
    //     </>
    // );

    // 秒转换为时、分、秒
    // const getTimeData = (t: any) => {
    //     let day = 0; // 剩余的天
    //     let hour = 0; // 剩余的小时
    //     let min = 0; // 剩余的分钟
    //     let second = 0; // 剩余的秒
    //     const type = etype; // 时间类型

    //     switch (type) {
    //         case 4:
    //             day = Math.floor(t / 86400); // 剩余的天
    //             hour = Math.floor(t / 3600 - day * 24); // 剩余的小时 已排除天
    //             min = Math.floor(t / 60 - day * 1440 - hour * 60); // 剩余的分钟 已排除天和小时
    //             second = Math.floor(t - day * 86400 - hour * 3600 - min * 60); // 剩余的秒
    //             break;
    //         case 3:
    //             hour = Math.floor(t / 3600); // 剩余的小时
    //             min = Math.floor(t / 60 - hour * 60); // 剩余的分钟 已排小时
    //             second = Math.floor(t - hour * 3600 - min * 60); // 剩余的秒
    //             break;
    //         case 2:
    //             min = Math.floor(t / 60); // 剩余的分钟
    //             second = Math.floor(t - min * 60); // 剩余的秒
    //             break;
    //         case 1:
    //             second = Math.floor(t); // 剩余的秒
    //             break;
    //         default:
    //             break;
    //     }

    //     const arr = [];
    //     type >= 4 && arr.push(String(day).padStart(2, '0'));
    //     type >= 3 && arr.push(String(hour).padStart(2, '0'));
    //     type >= 2 && arr.push(String(min).padStart(2, '0'));
    //     arr.push(String(second).padStart(2, '0'));

    //     return arr;
    // };

    // // 开始倒计时的当前时间
    // const currentTime: number = Math.floor(new Date().getTime() / 1000);

    // // 最终的时间 = 当前时间 + 倒计时时间
    // let endTime: any = endDate instanceof Date ? endDate.getTime() / 1000 : currentTime + endDate;

    // const initialValue = getTimeData(endTime - currentTime);
    // const [timeArray, setTimeArray] = useState(initialValue);

    // let currentTime: number = Math.floor(new Date().getTime() / 1000);
    // let c = currentTime + 100;
    // // let endTime = currentTime + 100;
    // let [count, setCount] = useState(0);
    // let [delay, setDelay] = useState(0);
    // let [a, setA] = useState(0);

    // useEffect(() => {
    //     let idtest = 0;
    //     let id = setInterval(() => {
    //         console.log(idtest++);
    //         console.log(count);

    //         let currentTime2: number = Math.floor(new Date().getTime() / 1000);
    //         let a = count - currentTime2;

    //         setCount(a);
    //         // setCount(count--);
    //         // if (count <= 0) {
    //         //     setCount(0);
    //         //     clearInterval(id);
    //         // } else {
    //         // }
    //     }, 1000);
    // let currentTime: number = Math.floor(new Date().getTime() / 1000);

    // let [count, setCount] = useState(endDate as number);
    // let [count2, setCount2] = useState(endDate as number);

    // const endTimeRef: any = useRef();
    // let id = 0;
    // const savedCallConst: any = useRef();
    // const savedCallback: any = useRef();
    // function tick(params: any) {
    //     console.log('hello');
    // }
    // const
    // useEffect(() => {
    //     // debugger;
    //     // console.log(id++, 'id');
    //     savedCallback.current = tick;
    //     // endTimeRef.current = currentTime + count;
    //     // savedCallConst.current = currentTime + count;
    // }, []);
    // function useInterval(callback: any, delay: number) {
    //     const savedCallback: any = useRef();

    //     // 保存新回调
    //     // debugger;
    //     useEffect(() => {
    //         // debugger;
    //         // console.log(id++, 'id');
    //         savedCallback.current = callback;
    //         // endTimeRef.current = currentTime + count;
    //         // savedCallConst.current = currentTime + count;
    //     }, [callback]);

    //     // 建立 interval
    //     useEffect(() => {
    //         // debugger;
    //         // endTimeRef.current = currentTime + count;
    //         // savedCallback.current = callback;
    //         function tick() {
    //             // console.log(id++, 'tick');
    //             // console.log(savedCallCon÷åst.current, 'tick savedCallConst.current');
    //             savedCallback.current();
    //             // callback();
    //         }
    //         if (delay !== null) {
    //             let id = setInterval(tick, delay);
    //             return () => clearInterval(id);
    //         }
    //     }, [delay]);
    // }

    // useInterval(() => {
    //     let currentTime: number = Math.floor(new Date().getTime() / 1000);
    //     console.log(id, 'idCount1');
    //     if (endTimeRef.current - currentTime > 0) {
    //         setCount(endTimeRef.current - currentTime);
    //     } else {
    //         setCount(0);
    //     }
    // }, 1000);

    // useInterval(() => {
    //     let currentTime: number = Math.floor(new Date().getTime() / 1000);
    //     console.log(id, 'idCount2');
    //     if (endTimeRef.current - currentTime > 0) {
    //         setCount2(endTimeRef.current - currentTime);
    //     } else {
    //         setCount(0);
    //     }
    // }, 2000);

    // function reducer(state: any, action: any) {
    //     switch (action.type) {
    //         case 'increment':
    //             return { count: state.count + 1 };
    //         case 'decrement':
    //             return { count: state.count - 1 };
    //         default:
    //             throw new Error();
    //     }
    // }
    // const initialState = { count: 0 };
    // const [state, dispatch] = useReducer(reducer, initialState);

    // useInterval(() => {
    //     let currentTime: number = Math.floor(new Date().getTime() / 1000);
    //     console.log(id);
    //     setCount(endTimeRef.current - currentTime);
    // }, 1000);

    // useEffect(() => {
    //     const { value } = count;
    //     let setIntervalid = setInterval(() => setCount({ value: value + 1 }), 1000);
    //     return () => clearInterval(setIntervalid);
    // }, [9]);

    // 增加计数器
    // useInterval(() => {
    //     setCount(count + 1);
    // }, delay);

    // // 每秒加速
    // useInterval(() => {
    //     if (delay > 10) {
    //         setDelay(delay / 2);
    //     }
    // }, 1000);

    // function handleReset() {
    //     setDelay(1000);
    // }

    // return (
    //     <div {...restProps}>
    //         Count: {state.count}
    //         {/* <h1>Counter: {count}</h1>
    //         <h4>Delay: {delay}</h4>
    //         <button onClick={handleReset}>Reset delay</button> */}
    //         {/* <button onClick={() => dispatch({ type: 'increment' })}>+</button>
    //         <button onClick={() => dispatch({ type: 'decrement' })}>-</button>
    //         {state.count} */}
    //     </div>
    // );
};
