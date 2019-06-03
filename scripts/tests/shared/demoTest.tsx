// import glob from 'glob';
// import { render } from 'enzyme';
// import { renderToJson } from 'enzyme-to-json';
import { getProjectUrl } from '../../helpers';
import React from 'react';
import { render, cleanup } from 'react-testing-library';
afterEach(cleanup);
export default function webDemoTest(componentName: string) {
    test(`renders ${componentName} correctly`, () => {
        const Demo: React.FC = require(getProjectUrl('src', componentName, 'demo')).default;
        expect(render(<Demo />).container).toMatchSnapshot();
    });
}
