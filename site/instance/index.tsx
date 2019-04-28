import { Route, Link, RouteComponentProps } from 'react-router-dom';
import React from 'react';
import { directoryStructure, sortStructure } from '../until/structure';
import Home from './Home';
import Demo from './Demo';

const Mobile: React.SFC<RouteComponentProps> = props => {
    const { match } = props;
    return (
        <div className="instance">
            <nav className="instance-nav">
                <Link to="/instance">Back</Link> Header
            </nav>
            {match.isExact ? <Home structure={sortStructure(directoryStructure)} /> : null}

            {directoryStructure.map(item => (
                <Route key={item.name} path={`/instance/${item.name}`} component={() => <Demo item={item} />} />
            ))}
        </div>
    );
};

export default Mobile;
