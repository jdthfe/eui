import webDemoTest from '@tests/shared/demoTest';
webDemoTest('Cover');

import React from 'react';
import Demo from '../demo';
import { transitionFade } from '../../_util/variable';
import { render, fireEvent, waitForElement } from 'react-testing-library';

// https://codesandbox.io/s/rqj0lymyn?from-embed
// https://reactjs.org/docs/hooks-faq.html#how-to-test-components-that-use-hooks
// https://codesandbox.io/s/xrw09qlx4o
// https://github.com/facebook/react/issues/15379

describe('CoverDemo', () => {
    it('Cover change visible', async () => {
        const { baseElement, getAllByRole } = render(<Demo />);

        // https://testing-library.com/docs/dom-testing-library/cheatsheet#queries
        fireEvent.click(getAllByRole('button')[0]);
        fireEvent.click(getAllByRole('button')[1]);
        fireEvent.click(getAllByRole('button')[2]);

        // https://testing-library.com/docs/dom-testing-library/api-async
        // await act(async () => {
        await waitForElement(() => baseElement.querySelector(`.${transitionFade}-entry-done`));
        // });

        expect(baseElement).toMatchSnapshot();
    });
});
