import React, { Fragment } from 'react';
import { Badge, Tabs } from '@src/index';

//
const Demo = () => {
    const tabs = [
        <Badge text={'3'}>First Tab</Badge>,
        <Badge text={'今日(20)'}>Second Tab</Badge>,
        <Badge dot>Third Tab</Badge>,
        <Badge dot>Fourth Tab</Badge>,
        <Badge dot>Fifth Tab</Badge>,
        <Badge dot>Sixth Tab</Badge>,
        <Badge dot>Seventh Tab</Badge>,
        <Badge dot>Eighth Tab</Badge>,
    ];

    const tabsFlex = [<div>Login</div>, <div>Register</div>];
    return (
        <Fragment>
            <Tabs tabs={tabs} activeIndex={0}>
                {[0, 1, 2].map(value => {
                    return <div key={value}>{value + 1}</div>;
                })}
            </Tabs>

            <Tabs tabs={tabsFlex} activeIndex={0} flex>
                {[0, 1].map(value => {
                    return <div key={value}>{value + 1}</div>;
                })}
            </Tabs>
        </Fragment>
    );
};

export default Demo;
