import { Toast } from '@src/index';
import React from 'react';
import { render, waitForElement, waitForElementToBeRemoved, fireEvent, cleanup } from 'react-testing-library';

import prefix from '../../_util/prefix';
const fadeCls = `.${prefix}-fade-entry-done`;
const prefixCls = `.${prefix}-toast`;

afterEach(cleanup);
describe('Toast', () => {
    const toastTxt = 'toastTxt';
    const duration = 1000;
    const time = 200;

    it('base snapshot about show and close', async () => {
        const { baseElement, getByText } = render(<div />);
        // 1
        // model 不传值自动阻止
        Toast.model();

        const alert1 = Toast.alert();
        await waitForElement(() => baseElement.querySelector(`${fadeCls}${prefixCls}-alert`));
        const success1 = Toast.success();
        await waitForElement(() => baseElement.querySelector(`${fadeCls}${prefixCls}-success`));

        //  排除 svg 文件干扰
        baseElement.querySelector('svg')!.remove();
        expect(baseElement).toMatchSnapshot('show: object = default');
        alert1();
        await waitForElementToBeRemoved(() => baseElement.querySelector(`${prefixCls}-alert`));
        success1();
        await waitForElementToBeRemoved(() => baseElement.querySelector(`${prefixCls}-success`));
        expect(baseElement).toMatchSnapshot('close: object = default');

        // 2
        // duration = 0 Toast 会一直持续，只能手动关闭
        const model = Toast.model({ children: 'model', duration: 0, time });
        await waitForElement(() => baseElement.querySelector(`${fadeCls}${prefixCls}`));

        const success = Toast.success({ children: 'success', duration: 0, time });
        await waitForElement(() => baseElement.querySelector(`${fadeCls}${prefixCls}-success`));
        const alert = Toast.alert({ children: 'alert', duration: 0, time });
        await waitForElement(() => baseElement.querySelector(`${fadeCls}${prefixCls}-alert`));
        Toast.loading();
        await waitForElement(() => baseElement.querySelector(`${fadeCls}${prefixCls}-loading`));
        //  排除 svg 文件干扰
        baseElement.querySelector('svg')!.remove();
        expect(baseElement).toMatchSnapshot('show: object has value');

        model();
        await waitForElementToBeRemoved(() => getByText('model'));
        success();
        await waitForElementToBeRemoved(() => baseElement.querySelector(`${prefixCls}-success`));
        alert();
        await waitForElementToBeRemoved(() => baseElement.querySelector(`${prefixCls}-alert`));
        Toast.closeLoading();
        await waitForElementToBeRemoved(() => baseElement.querySelector(`${prefixCls}-loading`));

        expect(baseElement.querySelectorAll(prefixCls).length).toEqual(0);
    });
    const timeDeviation = 200;

    it('closed successfully', async () => {
        const { getByText } = render(<div />);
        const close = Toast.model({ children: toastTxt, duration });
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
        const close = Toast.model({
            children: toastTxt,
            coverProps: { onClick: mockFn, className: CoverClass },
        });
        await waitForElement(() => baseElement.querySelector('.' + CoverClass));
        fireEvent.click(baseElement.querySelector('.' + CoverClass)!);
        expect(mockFn).toBeCalled();
        close();
        await waitForElementToBeRemoved(() => baseElement.querySelector('.' + CoverClass));
        const close2 = Toast.model({
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
        expect(baseElement).toMatchSnapshot('show base');
    });
});
