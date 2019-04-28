import React from 'react';
import { Badge } from '@src/index';
import './demo.scss';
const Demo = () => {
    return (
        <div className="Badge">
            <Badge dot>
                <span style={{ width: '26px', height: '26px', background: '#ddd', display: 'inline-block' }} />
            </Badge>

            <div>
                <Badge text={20} max={10}>
                    <span style={{ width: '26px', height: '26px', background: '#ddd', display: 'inline-block' }} />
                </Badge>
            </div>

            <div>
                <Badge text={9} max={10}>
                    <span style={{ width: '26px', height: '26px', background: '#ddd', display: 'inline-block' }} />
                </Badge>
            </div>

            <div>
                <Badge text={0}>
                    <span style={{ width: '26px', height: '26px', background: '#ddd', display: 'inline-block' }} />
                </Badge>
            </div>
            <div>
                <Badge text={'คูปองใหม่'} corner className={'my-corner'}>
                    <div className="corner-badge" style={{ height: '71px' }}>
                        Use corner prop
                    </div>
                </Badge>
            </div>
        </div>
    );
};

export default Demo;
