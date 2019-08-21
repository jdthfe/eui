export const prefix = 'eui';
export const Variable = {
    defaultDuration: 2000,
    transitionTime: 160,
    transitionFade: `${prefix}-fade`,
    transitionZoom: `${prefix}-zoom`,
};

export const removeNode = (el: HTMLDivElement) => {
    if (el.remove) {
        el.remove();
    } else if (el.parentNode) {
        el.parentNode.removeChild(el);
    }
};

export default {
    prefix,
    Variable,
    removeNode,
};
