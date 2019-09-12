const ENV = process.env.NODE_ENV;
if (
    // gulpfile.ts will delete 'false &&' when modules === undefined
    false &&
    ENV !== 'production' &&
    ENV !== 'test' &&
    typeof console !== 'undefined' &&
    console.warn &&
    typeof window !== 'undefined'
) {
    console.warn(
        'You are using a whole package of EUI, ' +
            'please use https://www.npmjs.com/package/babel-plugin-import to reduce app bundle size.',
    );
}
export { default as _util } from './_util';
export { default as Button } from './Button';
export { default as Icon } from './Icon';
export { default as TouchFeedback } from './TouchFeedback';
export { default as Portal } from './Portal';
export { default as TransitionWrap } from './TransitionWrap';
export { default as CountDown } from './CountDown';
export { default as Popover } from './Popover';
export { default as FixTop } from './FixTop';
export { default as Badge } from './Badge';
export { default as Tabs } from './Tabs';
export { default as WingBlank } from './WingBlank';
export { default as WhiteSpace } from './WhiteSpace';
export { default as Toast } from './Toast';
export { default as MessageBox } from './MessageBox';
export { default as Cover } from './Cover';
export { default as List } from './List';
export { default as Input } from './Input';
export { default as Popup } from './Popup';
