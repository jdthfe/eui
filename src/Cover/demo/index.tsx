import React from 'react';
import { Cover, Button, WhiteSpace } from '@src/index';
const Demo = () => {
    let cover = () => {};
    return (
        <div className="Cover">
            <Button
                theme="primary"
                onClick={() => {
                    cover();
                    cover = Cover.visible({ time: 200, onClick: () => cover() });
                }}
            >
                Cover
            </Button>
            <WhiteSpace />
            <Button
                theme="primary"
                onClick={() => {
                    cover();
                    cover = Cover.invisible({
                        onClick: () => cover(),
                        onExitDone: () => {
                            console.log('onExitDone');
                        },
                    });
                }}
            >
                Cover | Transparent
            </Button>
        </div>
    );
};

export default Demo;
