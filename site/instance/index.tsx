import { Route, Link, RouteComponentProps } from 'react-router-dom';
import React from 'react';
import { componentIndex, sortComponentIndex } from '../_util';
import Home from './Home';
// import Demo from './Demo';
import { AsyncDemo } from './AsyncDemo';

const Mobile: React.SFC<RouteComponentProps> = props => {
    const { match } = props;
    return (
        <div className="instance">
            <nav className="instance-nav">
                <Link to="/instance">Back</Link> Header
            </nav>
            {match.isExact ? <Home structure={sortComponentIndex(componentIndex)} /> : null}

            {componentIndex.map(item => (
                <Route key={item.name} path={`/instance/${item.name}`} component={() => <AsyncDemo item={item} />} />
            ))}
        </div>
    );
};

export default Mobile;
