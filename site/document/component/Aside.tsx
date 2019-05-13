import React, { Fragment } from 'react';
import Button from '@src/Button';
import { Link } from 'react-router-dom';
import { getLanguage } from '../../_util/language';
interface AsideProps {
    structure: { [propName: string]: ComponentIndex[] };
    onClick: (key: string) => void;
}

const Aside = (props: AsideProps) => {
    const { structure, onClick } = props;

    return (
        <div className="document-aside">
            {Object.keys(structure).map(key => (
                <Fragment key={key}>
                    <p>{key}</p>
                    {structure[key].map(item => (
                        <Link to={`/document/${item.name}`} key={item.name}>
                            <Button
                                theme="primary"
                                className="document-aside-btn"
                                ghost
                                onClick={() => onClick(item.name)}
                            >
                                {item.name} {getLanguage() !== 'en-US' ? item[getLanguage() as keyof LanguageObj] : ''}
                            </Button>
                        </Link>
                    ))}
                </Fragment>
            ))}
        </div>
    );
};
export default Aside;
