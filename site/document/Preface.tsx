import React from 'react';
// import { Button } from '@src/index';
import Button from '@src/Button';
import Logo from './component/Logo';
import { Link } from 'react-router-dom';

const Preface = () => {
    return (
        <div className="preface">
            <header>
                <Logo />
                <p>
                    基于 React 的移动端组件{' '}
                    <a href="https://github.com/qqqqqcy/EDM">
                        <Button className="preface-star" ghost inline>
                            star ★
                        </Button>
                    </a>
                </p>
                <Link to="/document/introduce">
                    <Button theme="primary" className="preface-btn" inline>
                        document
                    </Button>
                </Link>
                <Link to="/instance">
                    <Button theme="primary" ghost className="preface-btn" inline>
                        instance
                    </Button>
                </Link>
            </header>
        </div>
    );
};

export default Preface;
