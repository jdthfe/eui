import { Toast } from '@src/index';
import React from 'react';
import { render, waitForElement, waitForElementToBeRemoved } from 'react-testing-library';

describe('Toast', () => {
    it('animation', async () => {
        const toastTxt = 'toastTxt';
        const { getByText } = render(<div />);
        const toast = Toast.normal({ children: toastTxt, duration: 500 });

        const time = new Date().getTime();
        await waitForElement(() => getByText(toastTxt));
        // .then(e => {
        //     // console.log(e.textContent);
        //     expect(e.textContent).toEqual(toastTxt);
        // });
        // toast();
        await waitForElementToBeRemoved(() => getByText(toastTxt));
        const duration = new Date().getTime() - time;
        console.log(duration);
        // expect(duration);
    });
});

// todo close
// todo timeup
// todo loading
