import React from 'react';
import { getInstance } from '../_util';

interface DemoProps {
    item: ComponentIndex;
}
const Demo = (props: DemoProps) => {
    const { item } = props;
    const Demo = getInstance(item) || null;
    return <main className="instance-demo">{Demo ? <Demo /> : null}</main>;
};

export default Demo;
