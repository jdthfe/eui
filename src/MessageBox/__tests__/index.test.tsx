import { MessageBox } from '@src/index';
import React from 'react';
import { render, waitForElement, waitForElementToBeRemoved, fireEvent } from 'react-testing-library';
import { prefix } from '../../_util/';

function clearSvg(baseElement: HTMLElement) {
    //  排除 svg 文件干扰
    const svg = baseElement.querySelector('svg');
    if (svg) {
        svg.remove();
    }
}

describe('MessageBox', () => {
    const MessageBoxText = 'MessageBoxText';
    const testDiv = <div className="testDiv" />;
    const { baseElement, getByText } = render(testDiv);

    it('snapshots model', async () => {
        const close = MessageBox.model({ children: MessageBoxText });
        await waitForElement(() => getByText(MessageBoxText));
        expect(baseElement).toMatchSnapshot('model show');
        close();
        await waitForElementToBeRemoved(() => getByText(MessageBoxText));
        expect(baseElement).toMatchSnapshot('model close');
    });

    it('default model onClickCloseIcon', async () => {
        const onClick = jest.fn();

        MessageBox.model({ children: MessageBoxText, onClickCloseIcon: onClick });

        await waitForElement(() => getByText(MessageBoxText));
        fireEvent.click(baseElement.querySelector(`.${prefix}-messagebox-close`)!);
        await waitForElementToBeRemoved(() => getByText(MessageBoxText));

        expect(onClick).toBeCalled();
    });

    it('default model buttons', async () => {
        const confirmChildren = 'confirmChildren';
        const coverClassName = 'coverClassName';
        const onClick = jest.fn();

        const close = MessageBox.model({
            onClickCover: () => false,
            children: MessageBoxText,
            coverProps: { className: coverClassName },
            buttons: [
                {
                    onClick: () => {
                        onClick();
                        return false;
                    },
                    children: confirmChildren,
                },
            ],
        });

        await waitForElement(() => getByText(MessageBoxText));
        fireEvent.click(getByText(confirmChildren));
        await waitForElement(() => getByText(MessageBoxText));
        fireEvent.click(baseElement.querySelector(`.${coverClassName}`)!);
        await waitForElement(() => getByText(MessageBoxText));
        close();
        await waitForElementToBeRemoved(() => getByText(MessageBoxText));
        expect(onClick).toBeCalled();
    });

    it('default model onClickCover', async () => {
        const onClick = jest.fn();
        const coverClassName = 'coverClassName';

        MessageBox.model({ children: MessageBoxText, coverProps: { onClick, className: coverClassName } });

        await waitForElement(() => getByText(MessageBoxText));
        fireEvent.click(baseElement.querySelector(`.${coverClassName}`)!);
        await waitForElementToBeRemoved(() => getByText(MessageBoxText));

        expect(onClick).toBeCalled();
    });

    it('snapshots alert', async () => {
        const confirmCallback = jest.fn();
        const onClick = jest.fn();
        const confirmChildren = 'confirmChildren';

        MessageBox.alert({
            multiLineButtons: true,
            title: 'title',
            confirmButton: { onClick },
            children: MessageBoxText,
            confirmChildren,
            confirmCallback,
        });
        await waitForElement(() => getByText(confirmChildren));
        clearSvg(baseElement);
        expect(baseElement).toMatchSnapshot('alert show');
        fireEvent.click(getByText(confirmChildren));
        await waitForElementToBeRemoved(() => getByText(MessageBoxText));
        expect(baseElement).toMatchSnapshot('alert close');
        expect(confirmCallback).toBeCalled();
        expect(onClick).toBeCalled();
    });

    it('default alert', async () => {
        const confirmChildren = 'confirm';
        MessageBox.alert();
        await waitForElement(() => getByText(confirmChildren));
        fireEvent.click(getByText(confirmChildren));
        await waitForElementToBeRemoved(() => getByText(confirmChildren));
        expect(true).toEqual(true);
    });
    it('snapshots confirm', async () => {
        const confirmCallback = jest.fn();
        const onClick = jest.fn();
        const confirmChildren = 'confirmChildren';

        MessageBox.confirm({
            multiLineButtons: true,
            title: 'title',
            confirmButton: { onClick },
            children: MessageBoxText,
            confirmChildren,
            confirmCallback,
        });
        await waitForElement(() => getByText(confirmChildren));
        expect(baseElement).toMatchSnapshot('confirm show');
        fireEvent.click(getByText(confirmChildren));
        await waitForElementToBeRemoved(() => getByText(MessageBoxText));
        expect(baseElement).toMatchSnapshot('confirm close');
        expect(confirmCallback).toBeCalled();
        expect(onClick).toBeCalled();
    });

    it('default confirm', async () => {
        const cancelChildren = 'cancel';
        MessageBox.confirm();
        await waitForElement(() => getByText(cancelChildren));
        fireEvent.click(getByText(cancelChildren));
        await waitForElementToBeRemoved(() => getByText(cancelChildren));
        expect(true).toEqual(true);
    });
    it('cancel confirm & noCover', async () => {
        const onClick = jest.fn();
        const cancelChildren = 'cancel';
        const coverClassName = 'coverClassName';
        MessageBox.confirm({
            onClickCover: false,
            cancelButton: { onClick },
            coverProps: { className: coverClassName },
        });
        await waitForElement(() => getByText(cancelChildren));
        expect(baseElement.querySelector(`.${coverClassName}`) === null).toEqual(true);
        fireEvent.click(getByText(cancelChildren));
        await waitForElementToBeRemoved(() => getByText(cancelChildren));
        expect(onClick).toBeCalled();
    });
});
