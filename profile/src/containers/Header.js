import React, { Fragment } from 'react';
import { Link } from 'react-router';
//import Nav from './Nav';

const MenuItem = ({active, children, to}) => (
    <li className="nav-item">
        {/* <a className="nav-link js-scroll-trigger" href={to}>
            {children} 
        </a> */}
        <Link to={to} className="nav-link js-scroll-trigger">
            {children}
        </Link>
    </li>
);

const Header = (props, context) => {
    const { router } = context;
    return (
        <Fragment>
            <nav className="navbar navbar-expand-lg navbar-dark bg-primary fixed-top" id="sideNav">
                <a className="navbar-brand js-scroll-trigger" href="#page-top">
                    <span className="d-block d-lg-none">GYULPWANG!</span>
                    <span className="d-none d-lg-block">
                        <img className="img-fluid img-profile rounded-circle mx-auto mb-2" src="img/profile.jpg" alt="" />
                    </span>
                </a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav">
                        <MenuItem to={'/about'} active={router.isActive('/about')}>About</MenuItem>
                        <MenuItem to={'/experience'} active={router.isActive('/experience')}>Experience</MenuItem>
                        <MenuItem to={'/education'} active={router.isActive('/education')}>Education</MenuItem>
                        <MenuItem to={'/skills'} active={router.isActive('/skills')}>Skills</MenuItem>
                        <MenuItem to={'/interests'} active={router.isActive('/interests')}>Interests</MenuItem>
                        <MenuItem to={'/awards'} active={router.isActive('/awards')}>Awards</MenuItem>
                    </ul>
                </div>
            </nav>
        </Fragment>
    );
};

Header.contextTypes = {
    router: function () {
        return React.PropTypes.object;
    }
}

export default Header;