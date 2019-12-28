import React, { Fragment } from 'react';
import { Link } from 'react-router';

const ActivityLinks = () => {
    return (
        <Fragment>
            <Link to="/activity/education" className="nav-link js-scroll-trigger">교육수강</Link>
            <Link to="/activity/external" className="nav-link js-scroll-trigger">대외활동</Link>
            <Link to="/activity/campus" className="nav-link js-scroll-trigger">교내활동</Link>
        </Fragment>
    );
};

export default ActivityLinks;