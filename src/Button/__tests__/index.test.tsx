import { mount } from 'enzyme';
import { Button } from '@src/index';
import React from 'react';

describe('Button', () => {
    // Supplement uncovered test
    it('trigger event correctly', () => {
        // todos: write test!
        expect(true).toBe(true);
    });

    it('should call onClick callback if provided', () => {
        const onClickMock = jest.fn();
        const wrapper = mount(<Button onClick={onClickMock} className="edm-button" />);
        wrapper
            .find('.edm-button')
            .at(0)
            .simulate('click');
        expect(onClickMock).toHaveBeenCalled();
    });
});
