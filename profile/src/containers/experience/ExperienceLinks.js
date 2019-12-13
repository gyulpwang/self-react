import React, { Fragment } from 'react';
import { Link } from 'react-router';

const ExperienceLinks = () => {
    return (
        <Fragment>
            <Link to="/experience/w" className="nav-link js-scroll-trigger">W쇼핑</Link>
            <Link to="/experience/b" className="nav-link js-scroll-trigger">B쇼핑(현 SK스토아)</Link>
            <Link to="/experience/k" className="nav-link js-scroll-trigger">K쇼핑</Link>
        </Fragment>
    );
};

export default ExperienceLinks;