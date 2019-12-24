import React, { Fragment } from 'react';
import { Link } from 'react-router';

const AboutLinks = () => {
    return (
        <Fragment>
            <Link to="/about/history" className="nav-link js-scroll-trigger">살아온 이력</Link>
            <Link to="/about/career" className="nav-link js-scroll-trigger">경력 및 학력</Link>
            <Link to="/about/skills" className="nav-link js-scroll-trigger">보유기술</Link>
            <Link to="/about/activities" className="nav-link js-scroll-trigger">활동내역</Link>
        </Fragment>
    );
};

export default AboutLinks;