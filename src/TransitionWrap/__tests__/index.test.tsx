import { TransitionWrap } from '@src/index';
import React from 'react';
import { render } from 'react-testing-library';

describe('TransitionWrap', () => {
    it('default props', async () => {
        const { container } = render(
            <TransitionWrap>
                <p className="TransitionWrapP">TransitionWrap</p>
            </TransitionWrap>,
        );

        // const close = MessageBox.model({ children: MessageBoxText });
        // await waitForElement(() => getByText(MessageBoxText));

        expect(container.querySelector('.TransitionWrapP')).toEqual(null);
        // close();
        // await waitForElementToBeRemoved(() => getByText(MessageBoxText));
        // expect(baseElement).toMatchSnapshot('model close');
    });
});
