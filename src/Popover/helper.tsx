import { PopoverPropsType } from './PropsType';
function getAbsoluteBoundingRect(el: HTMLElement) {
    var doc = document,
        win = window,
        body = doc.body,
        // pageXOffset and pageYOffset work everywhere except IE <9.
        offsetX =
            win.pageXOffset !== undefined
                ? win.pageXOffset
                : (doc.documentElement || body.parentNode || body).scrollLeft,
        offsetY =
            win.pageYOffset !== undefined
                ? win.pageYOffset
                : (doc.documentElement || body.parentNode || body).scrollTop,
        rect = el.getBoundingClientRect();

    let parent: null | HTMLElement;
    if (el !== body && el.parentElement) {
        parent = el.parentElement;
        // The element's rect will be affected by the scroll positions of
        // *all* of its scrollable parents, not just the window, so we have
        // to walk up the tree and collect every scroll offset. Good times.
        while (parent !== body && parent) {
            offsetX += parent.scrollLeft;
            offsetY += parent.scrollTop;
            parent = parent.parentElement;
        }
    }

    return {
        bottom: rect.bottom + offsetY,
        height: rect.height,
        left: rect.left + offsetX,
        right: rect.right + offsetX,
        top: rect.top + offsetY,
        width: rect.width,
    };
}

type PureAnchorEl = Exclude<PopoverPropsType['anchorEl'], null>;
interface HelpObj {
    anchorEl: PureAnchorEl;
    elem: PureAnchorEl;
    dir: PopoverPropsType['dir'];
}
// 获得触发元素的位置
export function getElPositionStyle({ dir, elem, anchorEl }: HelpObj) {
    const rect = getAbsoluteBoundingRect(anchorEl);

    const width = anchorEl.offsetWidth,
        height = anchorEl.offsetHeight;
    let elemWidth = elem.offsetWidth;
    const elemHight = elem.offsetHeight;

    const offsetWidth = elemWidth - width;
    let left = 0,
        top = rect.top;
    switch (dir) {
        case 'top-right':
            left = rect.left - offsetWidth;
            top = rect.top - elemHight - 4;
            break;
        case 'top-center':
            left = rect.left - offsetWidth / 2;
            top = rect.top - elemHight - 4;
            elemWidth = elemWidth / 2;
            break;
        case 'top-left':
            left = rect.left;
            top = rect.top - elemHight - 4;
            elemWidth = 0;
            break;
        case 'bottom-right':
            top = rect.top + height + 4;
            left = rect.left - offsetWidth;
            break;
        case 'bottom-center':
            top = rect.top + height + 4;
            left = rect.left - offsetWidth / 2;
            elemWidth = elemWidth / 2;
            break;
        case 'bottom-left':
            left = rect.left;
            top = rect.top + height + 4;
            elemWidth = 0;
            break;
    }
    return { left, top, transformOrigin: elemWidth + 'px 0 0' };
}

// 设置模块位置
export function setElPositionStyle({ dir, elem, anchorEl }: HelpObj) {
    if (elem && elem.style) {
        const position = getElPositionStyle({ anchorEl, elem, dir });
        elem.style.top = position.top + 'px';
        elem.style.left = position.left + 'px';
        // transform-origin CSS 属性让你更改一个元素变形的原点。
        elem.style.transformOrigin = position.transformOrigin;
    }
}
