import React from 'react';
import { Tab, Tabs, TabsGroup, TabContainer } from '../index';
import { Icon } from '@src/index';

const Demo = () => {
    return (
        <>
            <TabsGroup centerMode={true} animated={false} flex={true}>
                <Tabs>
                    <Tab>Login</Tab>
                    <Tab>Sign up</Tab>
                </Tabs>

                {[0, 1].map(value => {
                    return <TabContainer key={value}>{value + 1}</TabContainer>;
                })}
            </TabsGroup>
            <br />
            <TabsGroup centerMode={true} animated={true}>
                <Tabs>
                    <Tab>
                        <Icon fill="currentColor" value="alipay" className="icon" />
                        Home
                    </Tab>
                    <Tab>Home2</Tab>
                    <Tab>Home3</Tab>
                    <Tab>Home4</Tab>
                    <Tab>Home5</Tab>
                    <Tab>Home6</Tab>
                    <Tab>Home7</Tab>
                    <Tab>Home8</Tab>
                    <Tab>Home9</Tab>
                    <Tab>Home10</Tab>
                    <Tab>Home11</Tab>
                </Tabs>
                {[0, 1, 2, 3, 4, 5, 6, 7, 8].map(value => {
                    return <TabContainer key={value}>{value + 1}</TabContainer>;
                })}
            </TabsGroup>

            <TabsGroup centerMode={true} position="right">
                <Tabs>
                    <Tab>
                        <Icon fill="currentColor" value="alipay" className="icon" />
                        Home
                    </Tab>
                    <Tab>Home2</Tab>
                    <Tab>Home3</Tab>
                    <Tab>Home4</Tab>
                </Tabs>
                {[0, 1, 2, 3].map(value => {
                    return <TabContainer key={value}>{value + 1}</TabContainer>;
                })}
            </TabsGroup>
        </>
    );
};

export default Demo;
