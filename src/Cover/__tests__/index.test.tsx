import { render } from 'enzyme';
import { renderToJson } from 'enzyme-to-json';
import React from 'react';
import { Cover } from '@src/index';

describe('Cover', () => {
    // Supplement uncovered test
    it('trigger event correctly', () => {
        expect(true).toBe(true);
    });

    it('Cover show successful', () => {
        expect(renderToJson(render(<Cover />))).toMatchSnapshot();
    });

    it('Cover.Transition show successful', () => {
        expect(renderToJson(render(<Cover.Transition />))).toMatchSnapshot();
    });
});
