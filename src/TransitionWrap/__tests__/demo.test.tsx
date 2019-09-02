import webDemoTest from '@tests/shared/demoTest';
webDemoTest('TransitionWrap');

import React from 'react';
import Demo from '../demo';
import { render, fireEvent, waitForElement, waitForElementToBeRemoved } from 'react-testing-library';

describe('TransitionWrapDemo', () => {
    it('unmontOnExit', async () => {
        const { baseElement, getAllByRole } = render(<Demo />);
        const btn = getAllByRole('button')[0];
        // https://testing-library.com/docs/dom-testing-library/cheatsheet#queries
        fireEvent.click(btn);

        // https://testing-library.com/docs/dom-testing-library/api-async
        await waitForElement(() => baseElement.querySelector(`.hello-entry`));
        await waitForElement(() => baseElement.querySelector(`.hello-entry-active`));
        await waitForElement(() => baseElement.querySelector(`.hello-entry-done`));

        expect(baseElement).toMatchSnapshot('visible=true');
        fireEvent.click(btn);

        await waitForElement(() => baseElement.querySelector(`.hello-exit`));
        await waitForElement(() => baseElement.querySelector(`.hello-exit-active`));
        await waitForElementToBeRemoved(() => baseElement.querySelector(`.hello-exit-active`));
        // await waitForElement(() => baseElement.querySelector(`.hello-exit-done`));
        expect(baseElement).toMatchSnapshot('visible=false');
    });

    it('keepOnExit', async () => {
        const { baseElement, getAllByRole } = render(<Demo />);
        const btn = getAllByRole('button')[1];

        await waitForElement(() => baseElement.querySelector(`.world-exit-done`));
        fireEvent.click(btn);

        await waitForElement(() => baseElement.querySelector(`.world-entry`));
        await waitForElement(() => baseElement.querySelector(`.world-entry-active`));
        await waitForElement(() => baseElement.querySelector(`.world-entry-done`));

        expect(baseElement).toMatchSnapshot('visible=true');
        fireEvent.click(btn);

        await waitForElement(() => baseElement.querySelector(`.world-exit`));
        await waitForElement(() => baseElement.querySelector(`.world-exit-active`));
        await waitForElement(() => baseElement.querySelector(`.world-exit-done`));
        expect(baseElement).toMatchSnapshot('visible=false');
    });
});
