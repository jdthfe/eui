import { Toast } from '@src/index';
import React from 'react';
import { render, waitForElement, waitForElementToBeRemoved, fireEvent, wait, cleanup } from 'react-testing-library';

afterEach(cleanup);
describe('Toast', () => {
    const toastTxt = 'toastTxt';
    const duration = 1000;
    const time = 200;

    it('snapshots', async () => {
        let flag = false;
        const { baseElement } = render(<div />);
        const normal = Toast.normal({ children: 'normal', duration: 0, time });
        const alert = Toast.alert({ children: 'alert', duration: 0, time });
        const success = Toast.success({ children: 'success', duration: 0, time });
        const normal2 = Toast.normal();
        const alert2 = Toast.alert();
        const success2 = Toast.success();
        Toast.loading();
        setTimeout(() => {
            flag = true;
        }, 500);
        await wait(() => {
            if (!flag) throw flag;
        });

        //  排除 svg 文件干扰
        baseElement.querySelector('svg')!.remove();
        expect(baseElement).toMatchSnapshot('show');

        normal();
        alert();
        success();
        normal2();
        alert2();
        success2();
        Toast.closeLoading();

        flag = false;
        setTimeout(() => {
            flag = true;
        }, 500);
        await wait(() => {
            if (!flag) throw flag;
        });

        expect(baseElement).toMatchSnapshot('close');
    });
    const timeDeviation = 200;
    // 误差允许
    // it('Toast lasted for the specified time', async () => {
    //     const { getByText } = render(<div />);
    //     Toast.normal({ children: toastTxt, duration, time });

    //     const showTime = new Date().getTime();
    //     await waitForElement(() => getByText(toastTxt));
    //     await waitForElementToBeRemoved(() => getByText(toastTxt));
    //     const realDuration = new Date().getTime() - showTime;
    //     expect(realDuration >= duration && realDuration < duration + time + timeDeviation).toEqual(true);
    // });
    it('closed successfully', async () => {
        const { getByText } = render(<div />);
        const close = Toast.normal({ children: toastTxt, duration });
        const showTime = new Date().getTime();
        await waitForElement(() => getByText(toastTxt));
        close();
        await waitForElementToBeRemoved(() => getByText(toastTxt));
        const realDuration = new Date().getTime() - showTime;
        expect(realDuration <= timeDeviation + time).toEqual(true);
    });

    const CoverClass = 'CoverClass';
    it('cover boolean', async () => {
        const { baseElement, getByText } = render(<div />);
        const mockFn = jest.fn();
        const close = Toast.normal({
            children: toastTxt,
            coverProps: { onClick: mockFn, className: CoverClass },
        });
        await waitForElement(() => baseElement.querySelector('.' + CoverClass));
        fireEvent.click(baseElement.querySelector('.' + CoverClass)!);
        expect(mockFn).toBeCalled();
        close();
        await waitForElementToBeRemoved(() => baseElement.querySelector('.' + CoverClass));
        const close2 = Toast.normal({
            children: toastTxt,
            noCover: true,
            coverProps: { onClick: mockFn, className: CoverClass },
        });
        await waitForElement(() => getByText(toastTxt));
        expect(baseElement.querySelector('.' + CoverClass)).toEqual(null);
        close2();
    });

    it('loading', async () => {
        const loadingText = 'loading';
        const { getByText, baseElement } = render(<div />);
        Toast.loading({ children: loadingText, duration, time, noCover: true, coverProps: { className: CoverClass } });

        const showTime = new Date().getTime();
        await waitForElement(() => getByText(loadingText));
        baseElement.querySelector('svg')!.remove();

        expect(baseElement.querySelector('.' + CoverClass)).toEqual(null);

        await waitForElementToBeRemoved(() => getByText(loadingText));
        const realDuration = new Date().getTime() - showTime;
        expect(realDuration >= duration && realDuration < duration + time + timeDeviation).toEqual(true);
    });

    it('base', async () => {
        const { baseElement } = render(<Toast visible>{toastTxt}</Toast>);
        expect(baseElement).toMatchSnapshot('show');
    });
});
