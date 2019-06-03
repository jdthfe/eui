import webDemoTest from '@tests/shared/demoTest';
webDemoTest('TransitionWrap');

import React from 'react';
import Demo from '../demo';
// import { transitionFade } from '../../_util/variable';
import { render, fireEvent, waitForElement } from 'react-testing-library';

describe('TransitionWrapDemo', () => {
    it('animation', async () => {
        const { baseElement, getAllByRole } = render(<Demo />);

        // https://testing-library.com/docs/dom-testing-library/cheatsheet#queries
        fireEvent.click(getAllByRole('button')[0]);
        // fireEvent.click(getAllByRole('button')[1]);
        // fireEvent.click(getAllByRole('button')[2]);

        // https://testing-library.com/docs/dom-testing-library/api-async
        // await act(async () => {
        await waitForElement(() => baseElement.querySelector(`.hello-entry`));
        await waitForElement(() => baseElement.querySelector(`.hello-entry-active`));
        await waitForElement(() => baseElement.querySelector(`.hello-entry-done`));

        expect(baseElement).toMatchSnapshot('visible=true');
        fireEvent.click(getAllByRole('button')[0]);

        await waitForElement(() => baseElement.querySelector(`.hello-exit`));
        await waitForElement(() => baseElement.querySelector(`.hello-exit-active`));
        // await waitForElement(() => baseElement.querySelector(`.hello-exit-done`));

        expect(baseElement).toMatchSnapshot('visible=false');
    });
});
