// import glob from 'glob';
import { render } from 'enzyme';
import { renderToJson } from 'enzyme-to-json';
import { getProjectUrl } from '../../helpers';
import React from 'react';

export default function webDemoTest(componentName: string) {
    test(`renders ${componentName} correctly`, () => {
        const Demo: React.SFC = require(getProjectUrl('src', componentName, 'demo')).default;
        expect(renderToJson(render(<Demo />))).toMatchSnapshot();
    });
}
