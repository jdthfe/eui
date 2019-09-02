import React from 'react';
import { Button, Icon, WingBlank, WhiteSpace } from '@src/index';
const Demo = () => {
    return (
        <WingBlank className="Button">
            <h4>Theme</h4>
            <Button theme="primary">primary</Button>
            <WhiteSpace />
            <Button theme="secondary">
                <Icon fill="#fff" value="selected" /> icon with secondary
            </Button>
            <WhiteSpace />
            <Button ghost>customize</Button>
            <WhiteSpace />
            <Button theme="primary" disabled>
                primary | disabled
            </Button>
            <WhiteSpace />
            <Button theme="primary" disabled ghost>
                primary | ghost | disabled
            </Button>
            <WhiteSpace />
            <Button theme="primary">
                <Icon fill="#fff" value="loading" />
            </Button>

            <WhiteSpace />

            <h4>Size</h4>
            <Button theme="primary" size="m">
                middle
            </Button>
            <WhiteSpace />
            <Button theme="primary" size="s">
                small
            </Button>
            <WhiteSpace />
            <div style={{ display: 'flex' }}>
                <Button inline ghost>
                    customize | ghost
                </Button>
                <Button rectangle theme="secondary">
                    secondary
                </Button>
                <Button rectangle theme="primary">
                    primary
                </Button>
            </div>
            <WhiteSpace />

            <h4>Customize</h4>
            <Button style={{ borderRadius: '10px', color: 'green' }} ghost>
                <Icon fill="currentColor" value="selected" /> color | radius | ghost
            </Button>
            <WhiteSpace />
            <Button style={{ color: 'hotpink' }}>color | hotpink</Button>
            <WhiteSpace />
        </WingBlank>
    );
};

export default Demo;
