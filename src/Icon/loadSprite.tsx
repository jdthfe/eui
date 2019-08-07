// inspried by https://github.com/kisenka/svg-sprite-loader/blob/master/runtime/browser-sprite.js
// Much simplified, do make sure run this after document ready
import svgs from './svgs';

const svgSprite = (contents: string) => `
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlns:xlink="http://www.w3.org/1999/xlink"
    id="__EUI_MOBILE_SVG_SPRITE_NODE__"
    style="position:absolute;width:0;height:0"
  >
    <defs>
      ${contents}
    </defs>
  </svg>
`;

// both minified by https://github.com/svg/svgo

const renderSvgSprite = () => {
    const symbols = Object.keys(svgs)
        .map(iconName => {
            const svgContent = (svgs as { [key: string]: string })[iconName].split('svg')[1];
            return `<symbol id=${iconName}${svgContent}symbol>`;
        })
        .join('');
    return svgSprite(symbols);
};

const loadSprite = () => {
    if (!document) {
        return;
    }
    const existing = document.getElementById('__EUI_MOBILE_SVG_SPRITE_NODE__');
    const mountNode = document.body;

    if (!existing) {
        mountNode.insertAdjacentHTML('afterbegin', renderSvgSprite());
    }
};

export default loadSprite;
