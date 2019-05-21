import React from 'react';
import ReactDOM from 'react-dom';

import Cover from './Cover';
import { CoverProps } from './PropsType';

const modal = (props: CoverProps) => {
    const { onExitDone = () => {}, ...restProps } = props;
    const div = document.createElement('div');
    document.body.append(div);
    const component = (
        <Cover
            {...restProps}
            onExitDone={() => {
                ReactDOM.unmountComponentAtNode(div);
                div.remove();
                onExitDone();
            }}
            mountNode={div}
            visible={false}
        />
    );
    ReactDOM.render(component, div, () => {
        ReactDOM.render(React.cloneElement(component, { visible: true }), div);
    });
    const close = () => ReactDOM.render(React.cloneElement(component, { visible: false }), div);

    return close;
};

export default {
    visible: (props: CoverProps = {}) => modal({ ...props }),
    invisible: (props: CoverProps = {}) => modal({ ...props, transparent: true }),
};
