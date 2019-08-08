export const removeNode = (el: HTMLDivElement) => {
    if (el.remove) {
        el.remove();
    } else if (el.parentNode) {
        el.parentNode.removeChild(el);
    }
};
