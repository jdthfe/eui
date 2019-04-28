import React from 'react';
import { Link } from 'react-router-dom';

export default function Nav() {
    return (
        <nav className="document-nav">
            <Link to="/document" className="document-nav-back">
                Back{' '}
            </Link>
            Document nav
        </nav>
    );
}
