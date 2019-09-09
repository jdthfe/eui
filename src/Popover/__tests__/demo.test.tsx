import webDemoTest from '@tests/shared/demoTest';
webDemoTest('Popover');

import React from 'react';
import Demo from '../demo';
import { render, fireEvent, waitForElement, waitForElementToBeRemoved } from 'react-testing-library';

describe('PopoverDemo', () => {
    it('Show Popover bottom-center', async () => {
        const { baseElement, getAllByRole } = render(<Demo />);
        const btn = getAllByRole('button')[0];
        fireEvent.click(btn);
        await waitForElement(() => baseElement.querySelector(`.eui-popover.eui-fade-entry-done.eui-fade`));
        await waitForElement(() =>
            baseElement.querySelector(`.eui-Cover.eui-Cover-transparent.eui-fade-entry-done.eui-fade`),
        );

        expect(baseElement).toMatchSnapshot('visible = true');

        const cover = baseElement.querySelector('.eui-Cover');
        if (cover) {
            fireEvent.click(cover);
        }
        await waitForElement(() => baseElement.querySelector(`.eui-fade-exit-active`));
        await waitForElementToBeRemoved(() => baseElement.querySelector(`.eui-fade-exit-active`));

        expect(baseElement).toMatchSnapshot('visible = false');
    });

    it('Show Popover top-center', async () => {
        const { baseElement, getAllByRole } = render(<Demo />);
        const btn = getAllByRole('button')[1];
        fireEvent.click(btn);
        await waitForElement(() => baseElement.querySelector(`.eui-popover.eui-fade-entry-done.eui-fade`));
        await waitForElement(() =>
            baseElement.querySelector(`.eui-Cover.eui-Cover-transparent.eui-fade-entry-done.eui-fade`),
        );

        expect(baseElement).toMatchSnapshot('visible = true');

        const cover = baseElement.querySelector('.eui-Cover');
        if (cover) {
            fireEvent.click(cover);
        }
        await waitForElement(() => baseElement.querySelector(`.eui-fade-exit-active`));
        await waitForElementToBeRemoved(() => baseElement.querySelector(`.eui-fade-exit-active`));

        expect(baseElement).toMatchSnapshot('visible = false');
    });
});
