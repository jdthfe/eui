import React from 'react';
import { Link } from 'react-router-dom';
import { languages, getLanguage } from '../../_util/language';

function setLanguage(event: React.ChangeEvent<HTMLSelectElement>) {
    const lang = event.currentTarget.value;
    if (lang === 'en-US') {
        localStorage.removeItem('language');
    } else {
        localStorage.setItem('language', lang);
    }
    location.reload();
}

export default function Nav() {
    return (
        <nav className="document-nav">
            <Link to="/document" className="document-nav-back">
                Back{' '}
            </Link>
            Document nav
            <div className="document-nav-lang">
                Language：
                <select defaultValue={getLanguage()} onChange={setLanguage}>
                    {languages.map(item => (
                        <option key={item.code} value={item.code}>
                            {item.content}
                        </option>
                    ))}
                </select>
            </div>
        </nav>
    );
}
