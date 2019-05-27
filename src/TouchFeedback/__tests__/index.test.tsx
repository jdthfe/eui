import { TouchFeedback } from '@src/index';
import React from 'react';
import { render, fireEvent } from 'react-testing-library';

describe('TouchFeedback', () => {
    const TouchFeedbackText = 'TouchFeedbackText';
    it('onMouse', async () => {
        const onMouseDown = jest.fn();
        const activeClassName = 'activeClassName';
        const { getByText, container } = render(
            <TouchFeedback activeClassName={activeClassName}>
                <button onMouseDown={onMouseDown}>{TouchFeedbackText}</button>
            </TouchFeedback>,
        );
        const button = getByText(TouchFeedbackText);
        fireEvent.mouseDown(button);
        expect(button.className).toEqual(activeClassName);
        expect(onMouseDown).toBeCalled();
        fireEvent.mouseUp(button);
        expect(button.className).toEqual('');
        fireEvent.mouseDown(button);
        expect(button.className).toEqual(activeClassName);
        fireEvent.mouseLeave(button);
        expect(button.className).toEqual('');
        container.remove();
    });
    it('onTouch', async () => {
        const onTouchStart = jest.fn();
        const activeClassName = 'activeClassName';
        const { getByText, container } = render(
            <TouchFeedback activeClassName={activeClassName}>
                <button onTouchStart={onTouchStart}>{TouchFeedbackText}</button>
            </TouchFeedback>,
        );
        const button = getByText(TouchFeedbackText);

        fireEvent.touchStart(button);
        expect(button.className).toEqual(activeClassName);
        expect(onTouchStart).toBeCalled();
        fireEvent.touchMove(button);
        expect(button.className).toEqual('');

        fireEvent.touchStart(button);
        expect(button.className).toEqual(activeClassName);
        fireEvent.touchEnd(button);
        expect(button.className).toEqual('');

        fireEvent.touchStart(button);
        expect(button.className).toEqual(activeClassName);
        fireEvent.touchCancel(button);
        expect(button.className).toEqual('');
        container.remove();
    });

    it('style & class', async () => {
        const onMouseDown = jest.fn();
        const { getByText, container } = render(
            <TouchFeedback activeStyle={{ background: 'red' }}>
                <button onMouseDown={onMouseDown}>{TouchFeedbackText}</button>
            </TouchFeedback>,
        );
        const button = getByText(TouchFeedbackText);
        fireEvent.mouseDown(button);
        expect(button.className).toEqual('');
        expect(button.style.background).toEqual('red');
        expect(onMouseDown).toBeCalled();
        fireEvent.mouseUp(button);
        expect(button.className).toEqual('');
        expect(button.style.background).toEqual('');
        container.remove();
    });
});
